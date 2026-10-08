var resp=window.document.getElementById("saida");
function acao1() {
    resp.innerHTML += "<p>Clicou no primeiro botão</p>";
    var a = prompt("Informe um número");
    if (a != "6") {
        resp.innerHTML += "<h1>Diferente de 6</h1>";

    } else {
        resp.innerHTML += "<h1>Igual a 6</h1>"
    }

}
function acao2() {
    resp.innerHTML += "<p>Clicou no segundo Botão</p>"
    switch(prompt("como está o tempo? Use chuvoso, ensolarado ou nublado")){
        
    }
}