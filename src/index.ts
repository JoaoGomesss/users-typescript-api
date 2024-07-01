import express from "express";
import { config } from "dotenv";
import { MongoGetUsersRepository } from "./repositories/get-users/mongo-get-users";
import { GetUsersContoller } from "./controllers/get-users/get-users";
import { MongoClient } from "./database/mongo";

const main = async () => {
  config();

  const app = express();

  await MongoClient.connect();

  app.get("/users", async (req, res) => {
    const mongoGetUsersRepository = new MongoGetUsersRepository();

    const getUsersController = new GetUsersContoller(mongoGetUsersRepository);

    //const response = await getUserController.handle()
    //res.send(response.body).status(response.statusCode)
    //isso de baixo é o mesmo que o de cima

    const { body, statusCode } = await getUsersController.handle();
    res.send(body).status(statusCode);
  });

  const port = process.env.PORT || 8000;

  app.listen(port, () => {
    console.log(`listening on port ${port}!`);
  });
};

main();
