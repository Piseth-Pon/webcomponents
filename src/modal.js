function modal() {
    const modalForm = document.querySelector(".modal-form")
    const openModalBtn = document.querySelector('#openModalBtn')
    const modalBtns = document.querySelectorAll('.modal-btn')

    openModalBtn.addEventListener('click', (e) => {
        modalForm.classList.remove('hide-modal')
    })
    modalBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            modalForm.classList.add('hide-modal')
        })
    })
}
export default modal