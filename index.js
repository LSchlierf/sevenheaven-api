import express from 'express';
const app = express();
app.use(express.static('sevenheaven-site/build'));

import * as path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'sevenheaven-site', 'build', 'index.html'));
});

// if not in production use the port 5000
const PORT = process.env.PORT || 5000;
console.log('server started on port:',PORT);
app.listen(PORT);