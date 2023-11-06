import path from 'path';
import express from 'express';

const rootDir = path.resolve(path.dirname(''));
const publicDir = path.join(rootDir, 'public');
const app = express();
const port = 3000;

app.use(express.static(publicDir));

app.get('*', (_, response) => {
  response.sendFile(path.resolve(publicDir, 'index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
