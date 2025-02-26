document.addEventListener("DOMContentLoaded", function() {
    let next = document.querySelector('.next');
    let prev = document.querySelector('.prev');

    next.addEventListener('click', function(){
        let items = document.querySelectorAll('.item');
        document.querySelector('.slide').appendChild(items[0]);
    });

    prev.addEventListener('click', function(){
        let items = document.querySelectorAll('.item');
        document.querySelector('.slide').prepend(items[items.length -1]);
    });

    window.changeBackgroundColor = function(color) {
        document.body.style.backgroundColor = color;
    };

    window.changeFont = function(font) {
        document.body.style.fontFamily = font;
    };

    function changeFont(font) {
        const paragraphs = document.querySelectorAll('.des');
        const topics = document.querySelectorAll('.name');
    
        // Change font for paragraphs
        paragraphs.forEach(p => {
            p.style.fontFamily = font;
        });
    
        // Change font for topics
        topics.forEach(topic => {
            topic.style.fontFamily = font;
        });
    }
    
    // Add event listeners to the font buttons
    document.getElementById('font1').addEventListener('click', function() {
        changeFont('Arial');
    });
    
    document.getElementById('font2').addEventListener('click', function() {
        changeFont('Courier New');
    });
    
    document.getElementById('font3').addEventListener('click', function() {
        changeFont('Georgia');
    });
});
