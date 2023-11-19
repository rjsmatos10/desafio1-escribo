const somaFunction = (numero) =>{
    let soma = 0 
    mensagem = "Você obteve o numero:"
    for (let i = 0; i < numero; i++) {

        if(i % 3 === 0 || i % 5 === 0) {
            soma += i;
        }
    }
    return mensagem + soma
} 

console.log(somaFunction("seunumeroaqui"))