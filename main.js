const btnEnter = document.querySelector('.btnSubmit');


const nome = prompt("Digite seu nome!");
alert(`Nome = "${nome}" || Senha = "123"`);


btnEnter.addEventListener('click', () => {
  
    const user = document.querySelector(".NameUserHere").value;
    const password = document.querySelector(".passwordInput").value;

  
    if (user === nome && password === '123') {
      
        window.location.href = '../pageHome/index.html';
    } else {
        alert('Senha ou login inválido');
    }
});
