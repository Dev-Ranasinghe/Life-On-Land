// scroll reveal js 
ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 400,
})

const scrollRevealOptionTop = {
    distance: "100px",
    origin: "top",
    duration: 2000,
}

const scrollRevealOptionLeft = {
    distance: "100px",
    origin: "left",
    duration: 2000,
}

const scrollRevealOptionRight = {
    distance: "100px",
    origin: "right",
    duration: 2000,
}

const scrollRevealOptionBottom = {
    distance: "100px",
    origin: "bottom",
    duration: 3000,
}

ScrollReveal().reveal(".home-content h3,h1", scrollRevealOptionTop);
ScrollReveal().reveal(".logo-img", scrollRevealOptionTop);
ScrollReveal().reveal(".home-content p", scrollRevealOptionLeft);
ScrollReveal().reveal(".home-content .social-media, .cv-btn", scrollRevealOptionBottom);

// scroll to top
function scrollToTop(){
    window.scrollTo(0, 0);
}

