document.getElementById('botao').addEventListener('click', consultarDados);

function consultarDados() {

    var nomeConsultado = document.getElementById('nome').value;


    fetch(`https://servicodados.ibge.gov.br/api/v2/censos/nomes/${nomeConsultado}`)
        .then(resposta => resposta.json())
        .then(dados => {
            if (dados.res.length > 0) {
                var resultDiv = document.getElementById("tabelaCorpo");
                resultDiv.innerHTML = `
                    <tr>
                        <td class="periodoResult">${dados.res.periodo}</td>
                        <td class="frequenciaResult">${dados.res.frequencia}</td>
                    </tr>
                `;
            }
            else {

            }
        })
        .catch(error => {
            console.log('Erro na requisição!', error);
            var resultDiv = document.getElementById('resultado');
            resultDiv.innerHTML = 'Erro na requisição! Favor tentar novamente.'
        });
}