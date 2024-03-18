//Esperar que o DOM esteja totalmente carregado antes de executar
document.addEventListener('DOMContentLoaded',function () {

    //Obter o elemento HTML para exibir a lista de usuários.
    const userListElement = document.getElementById('lista-disciplinas');

    //Vamos  fazer a requisição dos dados usando o fetch()
    fetch("db.json")

        //O método then() é usado para tratar a promessa retornada pelo método fetch() e converte para o
        //formato JSON
     .then(resposta => resposta.json())

     .then(resposta => resposta.disciplinas)

     .then(disciplinas =>{
        const userlistItems = disciplinas.map(disciplina => {

            //Para cada post cria uma string HTML representando as informações do post
            //`` -> template string
            return `<div class="disciplina">
                        <h2>${disciplina.titulo}</h2>
                        <p>${disciplina.id}</p>
                        <p>${disciplina.codigo}</p>

                    </div>
            `

        });

        userListElement.innerHTML = userlistItems.join('');
        //Vamos fazer o tratamento de erro caso ocorra durante a requisição dos dados - users

//        .catch(error => {
//            alert('Erro ao obter os dados!', error);
//        });



     });



});