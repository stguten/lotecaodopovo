import { apostaBuilder, responseBuilder } from "../builder/builders.js";
import { fazerApostaRepository, verificarApostaRepository } from "../repository/aposta.repository.js";

const verificarApostaController = async(req, res)=>{
    if(isNaN(req.query.numeroaposta)){
        res.status(400).send(responseBuilder(400,"Requisição Incorreta."));
        return;
    }
    const numeroAposta = req.query.numeroaposta;
    try{
        const aposta = await verificarApostaRepository(numeroAposta);
        (aposta !== undefined && Object.values(aposta).length > 0 
            ? res.status(200).send(responseBuilder(200,aposta)) 
            : res.status(404).send(responseBuilder(404,"Aposta não encontrada."))
        );
    }catch(e){
        res.status(500).send(responseBuilder(500,"Erro interno."));
    }

}

const fazerApostaController = async (req, res) => {
    let numerosAposta = req.body.numerosaposta || Array();
    const quantidadeNumeros = req.body.quantidadenumeros || 6;

    if(numerosAposta.length  == 0) numerosAposta = apostaBuilder(quantidadeNumeros,60);
    try{
        const aposta = await fazerApostaRepository(numerosAposta);
        res.status(200).send(responseBuilder(200,aposta));
    }catch(e){
        res.status(500).send(responseBuilder(500,"Erro interno."));
    }
}
export {fazerApostaController, verificarApostaController,geradorapostas};