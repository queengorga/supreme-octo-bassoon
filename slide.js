//Slideshow
var slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var pslides = document.getElementsByClassName("slide");
    var number = document.getElementsByClassName("number");
    if (n > pslides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = pslides.length
    }
    for (i = 0; i < pslides.length; i++) {
        pslides[i].style.display = "none";
    }
    for (i = 0; i < number.length; i++) {
        number[i].className = number[i].className.replace(" active", "");
    }
    pslides[slideIndex - 1].style.display = "block";
    number[slideIndex - 1].className += " active";
}