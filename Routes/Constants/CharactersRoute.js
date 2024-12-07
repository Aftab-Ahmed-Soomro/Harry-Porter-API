import express from "express";
import { characters } from "../../AllData/CharactersData.js";

export const charactersRoute = express.Router();

charactersRoute.get("/",(req,res)=> {
    res.status(200).send({status:200,message:"success",data:characters});
})