// scroll to top
function scrollToTop(){
    window.scrollTo(0, 0);
}

// backward button
document.getElementById('backward-button').addEventListener('click', function() {
    history.back();
});