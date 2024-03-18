//Desenvolver um aplicativo que gere senhas com os seguintes requisitos funcionais:
//        2.3.1. Informar o tamanho da senha - máximo 20 caracteres;
//        2.3.2. Informar a quantidade de senhas que deseja gerar - máximo dez senhas;
//        2.3.3. Permitir ou não a geração da senha com caracteres especiais - !@#$%&*()+=-*./;
//        2.3.4. Permitir ou não a geração da senha com números;
//        2.3.5. Permitir ou não a geração da senha com letras maiúsculas;
//        2.3.6. Botão para a geração da senha;
//        2.3.7. Botão para limpar todos os inputs;
//        2.3.8. textarea para exibir a(s) senha(s);

var tamanhoSenha = document.getElementById('tamanhoSenha');
var quantidadeSenhas = document.getElementById('quantidadeSenhas');
var caracteresEspeciais = document.getElementById('caracteresEspeciais');
var numeros = document.getElementById('numeros');
var letrasMaiusculas = document.getElementById('letrasMaiusculas');
var gerarSenha = document.getElementById('gerarSenha');
var limparInputs = document.getElementById('limparInputs');
var resultado = document.getElementById('resultado');
var limparSenhas = document.getElementById('limparSenhas');

var caracteres = 'abcdefghijklmnopqrstuvwxyz';

if (caracteresEspeciais) {
    caracteres += '!@#$%&*()+=-*./';
} 

if (numeros) {
    caracteres += '0123456789';
}

if (letrasMaiusculas) {
    caracteres += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
} 


var senhas = [];

gerarSenha.addEventListener('click', function gerar() {
    for (var i = 0; i < quantidadeSenhas.value; i++) {
        var senha = "";
        for (var j = 0; j < tamanhoSenha.value; j++) {
            var indice = Math.floor(Math.random() * caracteres.length);
            senha += caracteres.charAt(indice);
        }
        senhas.push(senha);
    }
    document.getElementById("senhasgeradas").value = senhas.join("\n");
});

limparInputs.addEventListener('click', function limpar() {
    tamanhoSenha.value = '';
    quantidadeSenhas.value = '';
    caracteresEspeciais.checked = false;
    numeros.checked = false;
    letrasMaiusculas.checked = false;
    resultado.value = '';
});

limparSenhas.addEventListener('click', function limparsenha() {
    senhas = [];
    document.getElementById("senhasgeradas").value = '';
});

