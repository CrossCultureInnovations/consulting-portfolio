import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import { EmailClient } from '@azure/communication-email';
import morgan from 'morgan';
import winston from 'winston';
import json from 'morgan-json';

const rootDir = path.resolve(path.dirname(''));
const publicDir = path.join(rootDir, 'public');
const app = express();
const port = process.env.PORT || 3000;

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.splat(),
    winston.format.json(),
  ),
  transports: [
    new winston.transports.Console(),
  ],
});

const emailBody = (description) => `
We will get in touch.
Asher/Amir
---

${description}`;

// parse application/json
app.use(bodyParser.json());
app.use(morgan(json({
  request: ':method :url :status',
  length: ':res[content-length]',
  'response-time': ':response-time ms',
})));
app.use(express.static(publicDir));

app.get('*', (_, response) => {
  response.sendFile(path.resolve(publicDir, 'index.html'));
});

app.post('/api/email', async (request, response) => {
  const { email, description } = request.body;
  if (process.env.NODE_ENV === 'production') {
    const connectionString = process.env.COMMUNICATION_SERVICES_CONNECTION_STRING;
    const emailFrom = process.env.EMAIL_SENDER;
    const emailClient = new EmailClient(connectionString);

    const emailMessage = {
      senderAddress: emailFrom,
      content: {
        subject: 'Thank you for reaching out.',
        plainText: emailBody(description),
      },
      recipients: {
        to: [{ address: email }],
        cc: [{ address: 'connect@crosscultureinnovations.com' }],
      },
    };

    const poller = await emailClient.beginSend(emailMessage);
    await poller.pollUntilDone();
    logger.info('Successfully send an email to email=%s', email);
  } else {
    logger.info('Skip sending email to email=%s NODE_ENV=%s', email, process.env.NODE_ENV);
  }

  response.sendStatus(200);
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
