import { Router } from "express";
import emocoesRoutes from "./emocoes.routes.js";

const routes = Router();

routes.get("/2tds2",(req,res) => {
    return res.status(404).send({message:"Hello, Word!"})
    });

    routes.use("/emocoes",emocoesRoutes);

    export default routes;