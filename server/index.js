import path from 'path';
import express from 'express';
import Mailjet from 'node-mailjet';
import bodyParser from 'body-parser';

const rootDir = path.resolve(path.dirname(''));
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
  const { email, description } = request.body;

  await mailjet
    .post('send', { version: 'v3.1' })
    .request({
      Messages: [
        {
          From: {
            Email: 'pilot@mailjet.com',
            Name: 'Mailjet Pilot',
          },
          To: [
            {
              Email: email,
            },
          ],
          Subject: 'Thank you for reaching out.',
          TextPart: description,
        },
      ],
    });

  response.sendStatus(200);
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
