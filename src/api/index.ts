import express, { Express } from 'express';
import cors from 'cors';

class App {
  app: Express;

  constructor() {
    this.app = express();
    this.middlewares();
  }

  private middlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cors());
  }
}

export default new App();
