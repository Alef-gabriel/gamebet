import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port: Number = 8080;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!!');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://172.17.146.252:${port}`);
});
