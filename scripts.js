let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex += 6;
    if (slideIndex >= slides.length) {slideIndex = 0}
    for (i = slideIndex; i < slideIndex + 6; i++) {
        slides[i % slides.length].style.display = "inline-block";  
    }
    setTimeout(showSlides, 2500); // Change image every 2.5 seconds
}
