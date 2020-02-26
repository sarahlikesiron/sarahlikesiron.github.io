var button = document.getElementById("topBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    console.log(document.body.scrollTop);
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
}

function toTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}