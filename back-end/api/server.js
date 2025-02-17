//API significa Application Programing Interface
//POST, GET, PUT, DELETE
//CRUD - Create, Read, Update, Delete
//endpoint - rotas que podem ser acessadas por uma API
// Middleware
import express from "express";
import cors from 'cors'
import { db } from "./connect.js";

const app = express();
const PORT = 3000;

app.use(cors())

app.get("/", (request, response) => {
  response.send("olaa mundo");
});

app.get("/artists", async(request, response) => {
  response.send(await db.collection('artists').find({}).toArray());
});

app.get("/songs", async(request, response) => {
  response.send(await db.collection('songs').find({}).toArray());
});

app.listen(PORT, () => {
  console.log(`Servidor esta escutando na porta ${PORT}`);
});
