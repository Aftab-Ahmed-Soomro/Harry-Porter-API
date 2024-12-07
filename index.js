import express from "express";
import dotenv from "dotenv";
import { bookRoute } from "./Routes/constants/BooksRoute.js";
import { charactersRoute } from "./Routes/Constants/CharactersRoute.js";
import { housesRoute } from "./Routes/Constants/HousesRoute.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 8000;

app.get("/",(req, res)=> {
    res.status(200).send("Welcome To Harry Porter API");
});

app.use("/books", bookRoute);

app.use("/characters", charactersRoute);

app.use("/houses", housesRoute);

app.listen(PORT, ()=> {
    console.log("Server Started", PORT);
})