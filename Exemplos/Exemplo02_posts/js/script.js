//Esperar que o DOM esteja totalmente carregado antes de executar
document.addEventListener('DOMContentLoaded',function () {

    //Obter o elemento HTML para exibir a lista de usuários.
    const userListElement = document.getElementById('lista-posts');

    //Vamos  fazer a requisição dos dados usando o fetch()
    fetch('https://jsonplaceholder.typicode.com/posts')

        //O método then() é usado para tratar a promessa retornada pelo método fetch() e converte para o
        //formato JSON
     .then(resposta => resposta.json())

     .then(posts =>{
        const userlistItems = posts.map(post => {

            //Para cada post cria uma string HTML representando as informações do post
            //`` -> template string
            return `<div class="post">
                        <h2>${post.title}</h2>
                        <p>${post.id}</p>
                        <p>${post.body}</p>

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