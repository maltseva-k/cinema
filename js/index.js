const modalWindow = document.querySelector('.modal')
const buttonsModal = document.querySelectorAll('.button-play')
const iframeModal = document.querySelector('.modal__inner iframe')

buttonsModal.forEach((item, i) => {
    item.addEventListener('click', () => {
        iframeModal.src = 'https://www.youtube.com/embed/g8Y_GL5h7Fs'
        modalWindow.classList.add('active')
    })
})

modalWindow.addEventListener('click', () => {
    iframeModal.src = ''
    modalWindow.classList.remove('active')
})
window.onkeydown = function (event) {
    if (event.keyCode === 27 || event.key === "Escape") {
        iframeModal.src = ''
        modalWindow.classList.remove('active')
    }
}



