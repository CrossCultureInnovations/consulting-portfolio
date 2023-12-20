import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import { EmailClient } from '@azure/communication-email';

const rootDir = path.resolve(path.dirname(''));
const publicDir = path.join(rootDir, 'public');
const app = express();
const port = process.env.PORT;

const connectionString = process.env.COMMUNICATION_SERVICES_CONNECTION_STRING;
const emailFrom = process.env.EMAIL_SENDER;
const emailClient = new EmailClient(connectionString);

// parse application/json
app.use(bodyParser.json());
app.use(express.static(publicDir));

app.get('*', (_, response) => {
  response.sendFile(path.resolve(publicDir, 'index.html'));
});

app.post('/email', async (request, response) => {
  const { email, description } = request.body;

  const emailMessage = {
    senderAddress: emailFrom,
    content: {
      subject: 'Thank you for reaching out.',
      plainText: `
We will get in touch.
Asher/Amir

---
${description}
      `,
    },
    recipients: {
      to: [{ address: email }],
    },
  };

  const poller = await emailClient.beginSend(emailMessage);
  await poller.pollUntilDone();

  response.sendStatus(200);
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
