function videoUrl(name){
    document.getElementById("vid-slider").src = name;
}

// target container
const targetContainer = document.querySelectorAll('.target-container');
const nxtBtn = document.querySelectorAll('.nxt-btn');
const preBtn = document.querySelectorAll('.pre-btn');

targetContainer.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;
    let scrollAmount = containerWidth / 2;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += scrollAmount;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= scrollAmount;
    })
})

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

const scrollRevealOptionRight = {
    distance: "50px",
    origin: "right",
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
