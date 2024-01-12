import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import dbConnection from "./database.js";
import { swaggerDocs } from "./v1/swagger.js";
import { routerUser } from "./routes/user.routes.js";
import { routerBook } from "./routes/book.routes.js";

dotenv.config();

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.middlewares();
    this.routes();
    this.conexionBd();
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(cors());
  }

  routes() {
    this.app.use("/api/user", routerUser);
    this.app.use("/api/book", routerBook);
  }

  async conexionBd() {
    await dbConnection();
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Juju library is running on ${this.port}!`);
      swaggerDocs(this.app, '4600');
    });
  }
}

export default Server;
