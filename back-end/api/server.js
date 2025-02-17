//API significa Application Programing Interface
//POST, GET, PUT, DELETE
//CRUD - Create, Read, Update, Delete
//endpoint - rotas que podem ser acessadas por uma API
// Middleware
import express from "express";
import cors from 'cors'
import { db } from "./connect.js";
import path from "path";

const __dirname = path.resolve()

const app = express();
const PORT = 3000;

app.use(cors())

app.get("/api/", (request, response) => {
  response.send("olaa mundo");
});

app.get("/api/artists", async(request, response) => {
  response.send(await db.collection('artists').find({}).toArray());
});

app.get("/api/songs", async(request, response) => {
  response.send(await db.collection('songs').find({}).toArray());
});

app.use(express.static(path.join(__dirname,"../front-end/dist")))

app.get("*", async(request, response) => {
  response.sendFile(path.join(__dirname,"../front-end/dist/index.html"))
});


app.listen(PORT, () => {
  console.log(`Servidor esta escutando na porta ${PORT}`);
});
