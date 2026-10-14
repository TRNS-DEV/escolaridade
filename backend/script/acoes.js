var resp = window.document.getElementById("saida");
function acao1() {
    resp.innerHTML += "<p>Clicou no primeiro botão</p>";
    var a = prompt("Informe um número");
    if (a === "6") {
        resp.innerHTML += "<h1>igual a 6</h1>";

    } else {
        resp.innerHTML += "<h1>diferente de 6</h1>"
    }

}
function acao2() {
    resp.innerHTML += "<p>Clicou no segundo Botão</p>"
    switch (prompt("como está o tempo? Use chuvoso, ensolarado ou nublado")) {
        //switch("chuvoso")
        case "chuvoso":
            resp.innerHTML += "<h1>lembresse de trazer o guarda-chuva!</h1>";
            break;
        case "ensolarado":
            resp.innerHTML += "<h1>Vista roupas leves!</h1>";
            break;
        case "nublado":
            resp.innerHTML += "<h1>Não Vá lá fora!!</h1>";
            break;
        default:
            resp.innerHTML += "<h1>Tempo Desconhecido</h1>"
            break;
    }
}
function acao3() {
    resp.innerHTML += "<p>Clicou no terceiro botão</p>"
    let numero = prompt("informe um número");
    for (let i = -1; i < numero; i++) {
        resp.innerHTML += "<p> paragrafo " + i + "</p>";
    }
}
function acao4() {
    //while
    resp.innerHTML += "<p>clicou no quarto botão</p>"
    let numero = prompt("informe um número");
    while (numero <= 10) {
        resp.innerHTML += "<p>linha " + numero + "</p>";
        numero++;
    }
}
function acao5() {
    //do while
    resp.innerHTML += "<p>clicou no quinto botão</p>"
    let numero = prompt("informe um número");
    do {
        resp.innerHTML += "<p>linha " + numero + "</p>";
        numero++;
    } while (numero <= 10)

}
//array
function acao6() {
    resp.innerHTML += "<p>Clicou no 6 botão</p>"
    let myArray =[1,2,3,4,5,6,7,8,9,10,11];
    myArray.forEach(function (value, key) {
        resp.innerHTML += "chave: " + key + " valor: " + value + "<br>";
    });
}
function acao7() {
    let entrada ="Bem-Vindo" + prompt("Informe seu nome");
    var saldacao= document.getElementById("titulo");
    saldacao.textContent = entrada;
    const collection = document.getElementsByClassName("animal");
    for (let i = 0; i < collection.length; i++) {
         if (collection[i].type == "checkbox") {
             collection[i].checked = true;
         }
    }
    resp.innerHTML += "<p>Clicou no 7 botão</p>"
    document.getElementByName("p")[1].innerHTML="texto do paragrafo 2 substituido com sucesso!";
    let teste = document.getElementByName("paragrafo");
    teste[1].textContent = "texto do paragrafo identificado por 'paragrafo' na posição 1, substituido com sucesso!";
}
function acao8() {
    resp.innerHTML += "<p>Clicou no 8 botão</p>"
    function calcularArea() {
        let area=3*5;
        resp.innerHTML += "<h1>Área total: " + area + "</h1>";
        
    
    }
    calcularArea();
}