import pool from "../config/pg.config.js";

const apostasGanhadorasRepository = async (numerosSorteados)=>{
    const result = await pool.query("SELECT * FROM loteca.apostas a WHERE a.numeros_apostados @> $1",[numerosSorteados])
    return result.rows
}

export {apostasGanhadorasRepository}