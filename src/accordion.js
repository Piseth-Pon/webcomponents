function accordion() {
    console.log('working on accordion')
    const headers = document.querySelectorAll(".accordion-header")

    headers.forEach((header) => {
        header.addEventListener("click", (e) => {
            const body = header.nextElementSibling
            body.classList.toggle('show')
        })
    })
}

export default accordion