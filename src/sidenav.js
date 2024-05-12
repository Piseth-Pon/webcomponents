function sidenav(){
    console.log('working on sidenav')
    const menuBtn = document.querySelector('#menuBtn')
    const menu = document.querySelector('#menu')
    const closeBtn = document.querySelector('#closeBtn')

    menuBtn.addEventListener('click', () =>{
        menu.classList.remove("menu-toggle")
    })

    closeBtn.addEventListener('click', () =>{
        menu.classList.add('menu-toggle')
    })
}

export default sidenav