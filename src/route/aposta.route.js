import { Router } from "express";
import { fazerApostaController, verificarApostaController } from "../controller/aposta.controller.js";

const aposta = Router();

aposta.get("/checarAposta", verificarApostaController);
aposta.post("/fazerAposta", fazerApostaController);

export default aposta;