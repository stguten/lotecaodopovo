import { apostaBuilder as resultBuilder } from "../builder/builders.js";
import { apostasGanhadorasRepository } from "../repository/sorteio.repository.js";

const sortearSena = async ()=>{
    const numerosSorteio = resultBuilder(6,60);
    const apostasGanhadoras = await apostasGanhadorasRepository(numerosSorteio);   
    console.log(apostasGanhadoras) ;
    (apostasGanhadoras !== undefined && Object.values(apostasGanhadoras).length > 0 
    ? console.log(apostasGanhadoras) 
    : console.log("NINGUEM GANHOU, PREMIO ACUMULADO!"));
}

export {sortearSena};