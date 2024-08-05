
const openModal = document.querySelector('.Serach')
const Modal = document.querySelector('.search')
const closeModal = document.querySelector('.closeModal')

openModal.addEventListener('click', () => {
    Modal.style.display = 'flex'
})

closeModal.addEventListener('click', () => {
    Modal.style.display = 'none'
})


