// scroll to top
function scrollToTop(){
    window.scrollTo(0, 0);
}

// backward button
document.getElementById('backward-button').addEventListener('click', function() {
    history.back();
});

// scroll reveal js 
ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 1000,
    delay: 400,
})

const scrollRevealOptionTop = {
    distance: "50px",
    origin: "top",
    duration: 1000,
}

const scrollRevealOptionLeft = {
    distance: "50px",
    origin: "left",
    duration: 1000,
}

ScrollReveal().reveal(".home-data", scrollRevealOptionTop);
ScrollReveal().reveal(".home-title", scrollRevealOptionLeft);
ScrollReveal().reveal(".video-slider", scrollRevealOptionLeft);
ScrollReveal().reveal(".explore-btn", scrollRevealOptionLeft);
ScrollReveal().reveal(".quick-links", scrollRevealOptionTop);