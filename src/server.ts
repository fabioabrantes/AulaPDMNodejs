import "reflect-metadata";
import express from 'express';
import "express-async-errors";
import cors from "cors";

import {exceptionsHandle} from './middleware/handleExceptions';

import {router} from './routes';

import "./database";

const app = express();


app.use(express.json());

app.use(router);
app.use(cors);

app.use(exceptionsHandle);

app.listen('3000', () => {
  console.log('server is online');
});
