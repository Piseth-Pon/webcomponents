function dropdown() {
  // Dropdown menu
  const navbar = document.querySelector('.navbar')
  const dropdown = document.querySelector('#dropdown')

  navbar.addEventListener('click', (e) => {

    let data = e.target.dataset.menu

    // console.log(data)
    if (data == "dropdown") {
      dropdown.classList.remove('toggle')
    } else {
      dropdown.classList.add('toggle')
    }

  })
}

export default dropdown