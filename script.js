/* 
passos :
-> crindo function, passando valor e tastando.
-> capturar elemento do INPUT
-> ir ao servidor e pegar as informações do tempo atualiada.

*/ 

let chave = "cebcd482eda57fa9a6714c1c2ba91885"

async function localizarCidade() {
    let dados = " https://api.openweathermap.org/data/2.5/weather?q=londre&appid=cebcd482eda57fa9a6714c1c2ba91885]";

    console.log(dados);
}

function clicarNoBotao() {
    let localidade = document.querySelector(".input-cidade").value;

    localizarCidade();
}






// minuto 1.46