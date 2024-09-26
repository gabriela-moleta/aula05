import { Router } from "express";
import emocoesRoutes from "./emocoes.routes.js";
import personagensRoutes from "./personagens.routes.js";

const routes = Router();

routes.get("/2tds2",(req,res) => {
    return res.status(404).send({message:"Hello, Word!"})
    });

    routes.use("/emocoes",emocoesRoutes);
    routes.use("/personagens", personagensRoutes);

    export default routes;