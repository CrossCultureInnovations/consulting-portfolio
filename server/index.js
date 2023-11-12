import path from 'path';
import express from 'express';
import Mailjet from 'node-mailjet';
import bodyParser from 'body-parser';
import fs from 'fs';
import Mustache from 'mustache';
import 'dotenv/config';

const rootDir = path.resolve(path.dirname(''));
const assetsDir = path.join(rootDir, 'assets');
const publicDir = path.join(rootDir, 'public');
const app = express();
const port = 3000;

const mailjet = new Mailjet({
  apiKey: process.env.MJ_APIKEY_PUBLIC,
  apiSecret: process.env.MJ_APIKEY_PRIVATE,
});

// parse application/json
app.use(bodyParser.json());
app.use(express.static(publicDir));

app.get('*', (_, response) => {
  response.sendFile(path.resolve(publicDir, 'index.html'));
});

app.post('/email', async (request, response) => {
  const emailTemplate = fs.promises.readFile(path.join(assetsDir, 'contact.email'));
  const { email, description } = request.body;

  await mailjet
    .post('send', { version: 'v3.1' })
    .request({
      Messages: [
        {
          From: {
            Email: 'pilot@mailjet.com',
            Name: 'Milwaukee Internationals Consulting LLC',
          },
          To: [
            {
              Email: email,
            },
          ],
          Subject: 'Thank you for reaching out.',
          TextPart: Mustache.render(emailTemplate, { description }),
        },
      ],
    });

  response.sendStatus(200);
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
