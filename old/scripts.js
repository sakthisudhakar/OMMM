// document.addEventListener('DOMContentLoaded', () => {
//     // Add any JavaScript functionality if needed
//     console.log('Document loaded');
// });


// document.addEventListener('DOMContentLoaded', function() {
//     const slides = document.querySelectorAll('.slider .slide');
//     let currentSlide = 0;

//     function nextSlide() {
//         slides[currentSlide].classList.remove('active');
//         slides[currentSlide].classList.add('previous');
//         currentSlide = (currentSlide + 1) % slides.length;
//         slides[currentSlide].classList.add('active');
//         slides[(currentSlide - 1 + slides.length) % slides.length].classList.remove('previous');
//     }

//     setInterval(nextSlide, 3000); // Change slide every 3 seconds
// });