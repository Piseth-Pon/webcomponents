function carousel() {
  // Carousel
  const carousels = document.querySelectorAll(".carousel-item")
  const prevBtn = document.querySelector('.prev-btn')
  const nextBtn = document.querySelector('.next-btn')

  let carouselIndex = 1
  displayCarousel(carouselIndex)

  prevBtn.addEventListener('click', () => {
    carouselIndex -= 1
    displayCarousel(carouselIndex)
  })

  nextBtn.addEventListener('click', () => {
    carouselIndex += 1
    displayCarousel(carouselIndex)
  })

  function displayCarousel(index) {

    if (index > carousels.length) {
      carouselIndex = 1
    }

    if (index < 1) {
      carouselIndex = carousels.length
    }
    console.log(carouselIndex)

    // Hide all the carousel
    for (let i = 0; i < carousels.length; i++) {
      carousels[i].style.display = "none"
    }

    // Display the selected carousel
    carousels[carouselIndex - 1].style.display = "block"

  } 
}

export default carousel