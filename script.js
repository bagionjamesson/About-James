function toggleNavigation() {
    const nav = document.querySelector('.navigation');
    nav.classList.toggle('active'); // Toggle the 'active' class
}

let currentSlide = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.slides img');
    const totalSlides = slides.length;

    // Hide the current slide
    slides[currentSlide].classList.remove('active');

    // Update the current slide index
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

    // Show the new slide
    slides[currentSlide].classList.add('active');
}
