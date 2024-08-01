const openModal = document.querySelector('.Serach')
const Modal = document.querySelector('.search')
const closeModal = document.querySelector('.closeModal')

openModal.addEventListener('click', () => {
    Modal.style.display = 'flex'
})

closeModal.addEventListener('click', () => {
    Modal.style.display = 'none'
})

const modal = document.querySelector('.AllChat')
const modalOpoen = document.querySelector('.OpenModalChat')
const CloseModalChat = document.querySelector('.CloseModalChat')

modalOpoen.addEventListener('click', () => {
    modal.style.display = 'Flex'
})

closeModal.addEventListener('click', () => {
    modal.style.display = 'none'
})