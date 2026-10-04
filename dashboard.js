
// ========== AUTO SLIDER PARFUM ==========
let currentSlide = 0;
const slides = document.querySelectorAll('.perfume-item');
const dots = document.querySelectorAll('.dot');
const totalSlides = slides.length;

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));
  slides[index].classList.add('active');
  dots[index].classList.add('active');
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}

// Auto slide every 2 seconds
setInterval(nextSlide, 2000);

// Manual dot navigation
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentSlide = index;
    showSlide(currentSlide);
  });
});

document.querySelectorAll('.tim-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const wrapper = btn.parentElement;
    wrapper.classList.toggle('active');
  });
});
