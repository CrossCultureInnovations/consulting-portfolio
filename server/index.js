import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import winston from 'winston';
import json from 'morgan-json';
import axios from 'axios';

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
    const apiKey = process.env.MAILJET_API_KEY;
    const apiSecret = process.env.MAILJET_API_SECRET;
    const emailFrom = process.env.MAILJET_SENDER;

    const emailMessage = {
      "Messages": [
        {
          "From": {
            "Email": emailFrom,
            "Name": "Crossculture Innovations"
          },
          "To": [
            {
              "Email": email,
              "Name": "customer"
            }
          ],
          "Cc": [
            {
              "Email": 'asherimtiaz@gmail.com',
              "Name": "info"
            }
          ],
          "Subject": "Thank you for reaching out.",
          "TextPart": emailBody(description)
        }
      ]
    };

    try {
      await axios.post("https://api.mailjet.com/v3.1/send", emailMessage, {
        auth: {
          username: apiKey,
          password: apiSecret
        }
      });
      logger.info('Successfully send an email to email=%s', email);
    } catch (error) {
      logger.info('Failed sending an email=%s', JSON.stringify(emailMessage));
    }

  } else {
    logger.info('Skip sending email to email=%s NODE_ENV=%s', email, process.env.NODE_ENV);
  }

  response.sendStatus(200);
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
