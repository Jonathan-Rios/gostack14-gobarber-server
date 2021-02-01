import 'reflect-metadata';
import 'dotenv/config';

import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { errors } from 'celebrate';
import 'express-async-errors'; // deve estar antes das rotas

import uploadConfig from '@config/upload';

import AppError from '@shared/errors/AppError';
import rateLimiter from './middlewares/rateLimiter';
import routes from './routes';

import '@shared/infra/typeorm';
import '@shared/container';

const app = express();

app.use(rateLimiter);
app.use(cors());
app.use(express.json());
app.use('/files', express.static(uploadConfig.uploadFolder));
app.use(routes);

app.use(errors());

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  // Precisa ser depois das rotas.
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }
  rateLimiter;
  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

app.get('/', (request, response) => {
  return response.json({ message: 'Hello World' });
});

app.listen(3333, () => {
  console.log('Server started on port 3333!');
});
