import moment from "moment";

function responseBuilder(resCode, resMessage) {
    return JSON.stringify(
        {
            time: moment(),
            code: resCode,
            result: resMessage
        }
    )
}

function apostaBuilder(qntNumeros, numeroLimite){
    const arr = Array();

    if (qntNumeros == 0) return;    
    
    do {
        const randomNumber = Math.floor(Math.random() * numeroLimite) + 1;
        if (!arr.includes(randomNumber)) arr.push(randomNumber);
    } while (arr.length < qntNumeros);
    
    return arr;
}

export {apostaBuilder, responseBuilder};