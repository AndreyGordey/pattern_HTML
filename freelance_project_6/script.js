
let currentSlide = 0;

function showSlides() {
    const slides = document.querySelectorAll('.slide');
    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    const offset = -currentSlide * 100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

setInterval(showSlides, 3000); // Изменение слайда каждые 3 секунды