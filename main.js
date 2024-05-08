
const btnEnter = document.querySelector('.btnSubmit')

const user = "hello"



btnEnter.addEventListener('click', () => {

    const wrongPassword = document.querySelector('.TryAgain')

    const nameUser = document.querySelector('.NameUserHere').value
    const passwordUser = document.querySelector('.passwordInput').value

    const password = '123'

    if (nameUser && passwordUser == password && user) {
       alert('Está certa!')
    } else {
      wrongPassword.innerHTML = "Senha incorreta!"
    }

}

)


