const modalWindow = document.querySelector('.modal')
const buttonsModal = document.querySelectorAll('.button-play')
const iframeModal = document.querySelector('.modal__inner iframe')

buttonsModal.forEach((item, i) => {
    item.addEventListener('click', () => {

        if (item.getAttribute('data-bs-video-url') === null || undefined) {
            iframeModal.src = 'https://www.youtube.com/embed/g8Y_GL5h7Fs'
        } else {
            iframeModal.src = item.getAttribute('data-bs-video-url')
        }
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


