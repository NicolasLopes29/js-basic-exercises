function TestaCPF() {
    const cpfInput = document.getElementById('cpfInput');
    const val = document.querySelector('.valido');
    const inv = document.querySelector('.invalido');

    const cpf = cpfInput.value.replace(/\.|-/g, "");

    // Verificando se o cpf tem 11 digitos.
    if (cpf.length !== 11) {
        document.getElementById('resultado').innerText = "Seu CPF precisa ter 11 dígitos.";
        return;
    }

    // Convertendo para um array de números.
    const cpf_array = cpf.split('').map(Number);

    // Calculando o primeiro dígito verificador.
    let soma = 0;

    for (let i = 0; i < 9; i++) {
        soma += cpf_array[i] * (10 - i);
    }
    let primeiro_digito = 11 - (soma % 11);
    primeiro_digito = primeiro_digito > 9 ? 0 : primeiro_digito;

    // Calculando o segundo dígito verificador.
    soma = 0;

    for (let i = 0; i < 10; i++) {
        soma += cpf_array[i] * (11 - i);
    }

    let segundo_digito = 11 - (soma % 11);
    segundo_digito = segundo_digito > 9 ? 0 : segundo_digito;

    // Verificando se os dígitos verificadores são válidos.
    if (cpf_array[9] === primeiro_digito && cpf_array[10] === segundo_digito) {
        document.getElementById('resultado').innerText = "Seu CPF é válido.";
        val.style.display = "block";
        inv.style.display = "none";
    } else {
        document.getElementById('resultado').innerText = "Seu CPF é inválido.";
        inv.style.display = "block";
        val.style.display = "none";
    }
}

document.getElementById('verificarButton').addEventListener('click', function () {
    TestaCPF();
});
