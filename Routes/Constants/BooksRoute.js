import express from "express";
import { books } from "../../AllData/BooksData.js";

export const bookRoute = express.Router();

bookRoute.get("/",(req, res)=> {
    res.status(200).send({status:200,message:"success",data: books});
})

