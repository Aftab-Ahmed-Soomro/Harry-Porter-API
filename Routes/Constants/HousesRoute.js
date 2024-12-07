import express from "express";
import { houses } from "../../AllData/HousesData.js";

export const housesRoute = express.Router();

housesRoute.get("/",(req,res)=> {
    res.status(200).send({status:200,message:"success",data:houses});
});