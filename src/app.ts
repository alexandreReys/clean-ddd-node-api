import express, { Express } from "express";
import routes from "./infra/routes";

class AppController {
  express: Express;

  constructor() {
    this.express = express();

    this.middlewares();
    this.routes();
  }
  middlewares() {
    this.express.use(express.json());
  }
  routes() {
    this.express.use(routes);
  }
}

export const app = new AppController().express;
