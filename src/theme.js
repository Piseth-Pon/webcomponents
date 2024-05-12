function theme() {
  const toggleTheme = document.querySelector('.toggleTheme')
  toggleTheme.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark_theme')
  })
}

export default theme