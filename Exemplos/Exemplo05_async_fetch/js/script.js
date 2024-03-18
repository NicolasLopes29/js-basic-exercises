
//Chamando a função carregarUsers quando a página for carregada
document.addEventListener('DOMContentLoaded', carregarUsers);

//Vamos implementar a função assíncrona carregarUsers 

async function carregarUsers() {
    try {
        //Vamos fazer a requisição ao JSONPlaceholder - users
        const resposta = await fetch('https://jsonplaceholder.typicode.com/users');

        const users = await resposta.json();

        const usersHTML = users.map(user =>{
            return `
            <div class="user">
                <h2>${user.name}</h2>
                <p>Username:${user.username}</p>
                <p>Email:${user.email}</p>
                <p>Phone:${user.phone}</p>

            
            `
        })

        //Inserindo os users no container de users no HTML
        const userContainer = document.getElementById('container');
        userContainer.innerHTML = usersHTML.join('');

    }
    catch(error){
        console.error('Ocorreu um erro ao carregar os usuários!', error);
    }
}