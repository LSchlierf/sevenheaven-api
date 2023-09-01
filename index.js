import express from 'express';
const app = express();
app.use(express.static('/sevenheaven-site/build'));
app.use(express.json())

import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.post('/api', (req, res) => {
    console.log('got post request to /api from ' + req.ip);
    console.log(req.body);

    //handle malformed request errors
    const request = req.body
    if (!request) {
        res.json({'status' : 'error', 'error' : 'missing request body'})
    }
    const mail = request.mail
    if(!mail) {
        res.json({'status' : 'error', 'error' : 'missing email address'})
    }
    const mesg = request.mesg
    if(!mesg) {
        res.json({'status' : 'error', 'error' : 'missing message'})
    }

    res.json({'status' : 'success', 'request' : req.body});
})

app.get('*', (_, res) => {
    res.sendFile(path.resolve(__dirname, 'sevenheaven-site', 'build', 'index.html'));
});

// if not in production use the port 5000
const PORT = process.env.PORT || 5000;
console.log('server started on port:',PORT);
app.listen(PORT);