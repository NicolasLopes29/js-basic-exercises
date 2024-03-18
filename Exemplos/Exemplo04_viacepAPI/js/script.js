document.getElementById('btnBuscar').addEventListener('click', consultarCEP);

function consultarCEP() {

    var cep = document.getElementById('cepInput').value;

    fetch(`http://viacep.com.br/ws/${cep}/json/`)

        .then(resposta => resposta.json())

        .then(dados => {
            var resultDiv = document.getElementById('resultado');

            if (dados.erro) {
                resultDiv.innerHTML = 'CEP NÃO ENCONTRADO!';
            }
             else {
                resultDiv.innerHTML = `
                    <p><strong>Logradouro: </strong>${dados.logradouro}</p>
                    <p><strong>Bairro: </strong>${dados.bairro}</p>
                    <p><strong>Localidade: </strong>${dados.localidade} - ${dados.uf}</p>
                `
            }
        })

        .catch(error => {
            console.log('Erro na requisição!', error);
            var resultDiv = document.getElementById('resultado');
            resultDiv.innerHTML = 'Erro na requisição! Favor tentar novamente.'
        });
}
