var nome = document.getElementById('txtNome');
var tel = document.getElementById('txtTel');
var email = document.getElementById('txtEmail');


let dados = [ ];
let user = [];

function adcElemento() {

    user.push(nome.value);
    user.push(tel.value);
    user.push(email.value);

    dados.push(user);

    var divNova = document.createElement("li");
    var conteudoNovo = document.createTextNode(user);
    divNova.appendChild(conteudoNovo); 

    document.getElementById('dados').appendChild(divNova);

    user = [];

}