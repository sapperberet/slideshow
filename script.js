let slide = 1;
show(slide);


function shift(n) {
  show(slide += n);
}

function reveal(n) {
  show(slide = n);
}

function show(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slide = 1}
  if (n < 1) {slide = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slide-1].style.display = "block";
  dots[slide-1].className += " active";
}
