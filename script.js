/* 
passos :
-> crindo function, passando valor e tastando.
-> capturar elemento do INPUT
-> ir ao servidor e pegar as informações do tempo atualiada.
-> Organizando as informações que chegaram(devtools) coveretendo para grau celso.

*/ 

// let chave = "cebcd482eda57fa9a6714c1c2ba91885"


let chave = "8bfeb89b42e07862ad31b245161b34a1";

function colocarNaTela(dados){
    console.log(dados);
    
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name

    document.querySelector(".graus").innerHTML = Math.floor(dados.main.temp_max)+ "°C";

    document.querySelector(".icone").src = "https://openweathermap.org/img/wn/"+ dados.
    weather[0].icon +".png"
}

async function localizarCidade(localidade) {
    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q="+ localidade + "&appid=8bfeb89b42e07862ad31b245161b34a1&units=metric").then ( resposta => resposta.json());

    // ASYNC = espere
    // AWAIT = ferramenta js p/ acessar servidores
    // FETCH = Ferramenta JS para acessar servidores
    // THEN = Então
    // JSON = Java Script object Notation (formata que js entende ).
    // & = separar
    // "units=metric" = coverter para grau celcios  ex: &units=metric
        

    colocarNaTela(dados)
}

function clicarNoBotao() {
    let localidade = document.querySelector(".input-cidade").value;

    localizarCidade(localidade);
}


// 30 minutow

// "img/internet_15114062.png

