const like = document.querySelector('#btnLike')

let num = 0

like.addEventListener('click', () => {
    const numLike = document.querySelector('.NumberLiked')

num++

numLike.textContent = num

num = 0

like.style.color = 'red'

})


 