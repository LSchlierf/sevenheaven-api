import express from 'express';
import bodyParser from 'body-parser';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { readFileSync } from 'fs';
import nodemailer from 'nodemailer'
import { exit } from 'process';

const app = express();

app.use(express.static('../sevenheaven-site/build'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function getCredentials() {
    if (process.env.USER && process.env.PASS) {
        return { USER: process.env.USER, PASS: process.env.PASS }
    }
    try {
        const secrets = JSON.parse(
            readFileSync('./secrets.json')
        );
        return secrets
    } catch (e) {
        return false
    }
}

const secrets = getCredentials()
if(!secrets) {
    console.error('Credentials not found, please set environment variables USER and PASS or create secrets.json')
    exit(1)
}

const transporter = nodemailer.createTransport({
    host: "smtppro.zoho.com",
    port: 465,
    secure: true,
    auth: {
        user: secrets.USER,
        pass: secrets.PASS
    }
})

function htmlencode(rawstr) {
    return rawstr.replace(/[<>\&]/g, i => '&#' + i.charCodeAt(0) + ';')
}

app.post('/api', async function (req, res) {
    console.log('got post request to /api');
    console.log(req.body);

    // handle malformed request errors
    const request = req.body
    if (!request) {
        res.json({ 'status': 'error', 'error': 'missing request body' })
    }
    const mail = request.mail
    if (!mail) {
        res.json({ 'status': 'error', 'error': 'missing email address' })
    }
    const mesg = request.mesg
    if (!mesg) {
        res.json({ 'status': 'error', 'error': 'missing message' })
    }

    const info = await Promise.all([
        transporter.sendMail({
            from: "kontakt@sevenheaven.band",
            to: "kontakt@sevenheaven.band",
            subject: "Neue Kontaktanfrage",
            text: "Neue Nachricht von " + htmlencode(mail) + " :\n\n" + htmlencode(mesg) + "\n"
        }),
        transporter.sendMail({
            from: "Seven Heaven <kontakt@sevenheaven.band>",
            to: mail,
            subject: "Deine Kontaktanfrage",
            text: "Hi!\nVielen Dank für deine Kontaktanfrage:\n" + htmlencode(mesg) + "\n\nWir melden uns so schnell wie möglich!\n\nMit freundlichen Grüßen\nSeven Heaven"
        })
    ])

    console.log(info)

    if (!info[0].response.startsWith('2') || info[0].rejected.length > 0 || !info[1].response.startsWith('2') || info[1].rejected.length > 0) {
        res.json({ 'status': 'error', 'error': 'internal error' })
    }

    res.json({ 'status': 'success', 'request': req.body });
})

// serve frontend only if not in production
if (!process.env.PORT) {
    app.get('*', (_, res) => {
        console.log('frontend request')
        res.sendFile(path.resolve(__dirname, '..', 'sevenheaven-site', 'build', 'index.html'));
    });
}

// if not in production use the port 5000
const PORT = process.env.PORT || 5000;
console.log('server started on port:', PORT);
app.listen(PORT);