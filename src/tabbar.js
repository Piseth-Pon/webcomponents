function tabbar() {
  // tabbar
  const tabbar = document.querySelector('#tabbar')
  const tabbtns = document.querySelectorAll('.tab-btn')
  const contents = document.querySelectorAll('.content')

  // console.log(tabbar, tabbtns)
  tabbar.addEventListener('click', (e) => {
    // console.log('you click on tabbar')

    const page = e.target.dataset.page
    // console.log(page, e.target) 
    // e.target : get the element that we clicked on
    
    if(page) {
      // erase everything
      for (let i = 0; i < tabbtns.length; i++) {
        tabbtns[i].classList.remove('active')
      }
      // setup a new active one
      e.target.classList.add('active')

      // hide all contents
      for (let i = 0; i < contents.length; i++) {
        contents[i].classList.remove('active')
      }

      const displayContent = document.querySelector('#'+page)
      // const displayContent = document.getElementById(page)
      displayContent.classList.add('active')
    }

  })
}

export default tabbar
