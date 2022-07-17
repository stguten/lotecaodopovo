import pool from "../config/pg.config.js";

const verificarApostaRepository = async (idAposta) =>{
    const result = await pool.query("SELECT * FROM loteca.apostas where id = $1", [idAposta])
    return result.rows[0]
}

const fazerApostaRepository = async (numerosAposta) => {
    const client = await pool.connect();
    try{
        await client.query("BEGIN");
        const result = await client.query("INSERT INTO loteca.apostas(numeros_apostados) VALUES ($1) RETURNING id", [numerosAposta]);
        await client.query("COMMIT");
        return result.rows[0];
    }catch(e){
        client.query("ROLLBACK");
        throw e;
    }
}

export {verificarApostaRepository, fazerApostaRepository};