//Esperar que o DOM esteja totalmente carregado antes de executar
document.addEventListener('DOMContentLoaded',function () {

    //Obter o elemento HTML para exibir a lista de usuários.
    const userListElement = document.getElementById('lista-usuarios');

    //Vamos  fazer a requisição dos dados usando o fetch()
    fetch('https://jsonplaceholder.typicode.com/users')

        //O método then() é usado para tratar a promessa retornada pelo método fetch() e converte para o
        //formato JSON
     .then(resposta => resposta.json())

     .then(users =>{
        const userlistItems = users.map(user => {

            //Para cada usuário cria uma string HTML representando as informações do usuário
            //`` -> template string
            return `<div class="user">
                        <h2>${user.name}</h2>
                        <p>${user.email}</p>
                        <p>${user.website}</p>

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