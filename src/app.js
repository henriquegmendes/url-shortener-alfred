import dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import apiRoutes from './routes/routes';
import { errors } from './utils';
import './database/mongoose';

class App {
  constructor() {
    this.app = express();

    dotenv.config();

    this.middlewares();
    this.routes();
    this.errorHandler();
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(helmet());
    this.app.use(cors({
      origin: '*',
      methods: ['GET', 'POST', 'OPTIONS'],
    }));
  }

  routes() {
    this.app.use('/', apiRoutes);
  }

  errorHandler() {
    this.app.use(errors.handleError);
  }
}

export default new App().app;
