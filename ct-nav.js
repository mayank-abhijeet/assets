window.onscroll = function () {
    makeitstick()
};
window.onresize = function () {
    mobileViewControl()
};

var navigation = document.getElementById("navigation");
var list = document.querySelectorAll('.list');
var ham = document.getElementById("ham");
var heading = document.getElementById("heading");
var heading_mobile = document.getElementById("heading-mobile");
var home=document.querySelector(".home");
var for_you_overlay=document.getElementById("for_you_overlay");

var sticky = navigation.offsetTop;
var hamSticky = ham.offsetTop;


home.addEventListener("mouseenter",function(event){
    for_you_overlay.classList.remove("hidden");  
});
home.addEventListener("mouseleave",function(event){
for_you_overlay.classList.add("hidden");  
});
home.addEventListener("click",function(){
for_you_overlay.classList.toggle("hidden");
});


document.addEventListener("DOMContentLoaded", function (event) {

    if (window.matchMedia("(max-width: 768px)").matches) {
        ham.classList.remove("hideHam");
        ham.classList.add("show");
        heading_mobile.classList.remove("hide");
        for (i = 0; i < list.length; i++) {
            list[i].classList.add("hide");
        }
    } else {
        heading_mobile.classList.add("hide");
        ham.classList.add("hideHam");
        heading.classList.add("hide");

    }
});



function makeitstick() {

    if (window.pageYOffset >= sticky) {
        navigation.classList.add("sticky");
        ham.classList.add("sticky");
        ham.classList.remove("hideHam");
        ham.classList.add("show");
        heading.classList.add("show");
        heading.classList.remove("hide");
        for (i = 0; i < list.length; i++) {
            list[i].classList.add("hide");
        }
        if (ham.classList.contains("change")) {
            ham.classList.remove("change");
        }

        console.log("if part");

    } else {
        navigation.classList.remove("sticky");
        ham.classList.remove("sticky");
        ham.classList.add("hideHam");
        ham.classList.remove("show");
        heading.classList.remove("show");
        heading.classList.add("hide");
        for (i = 0; i < list.length; i++) {
            list[i].classList.remove("hide");
        }

        console.log("else part");
    }
    if (window.matchMedia("(max-width: 768px)").matches) {
        navigation.classList.remove("sticky");
        ham.classList.add("show");
        for (i = 0; i < list.length; i++) {
            list[i].classList.add("hide");
        }
    }
}

function animateHam() {
    ham.classList.toggle("change");
    heading.classList.toggle("hide");
    heading.classList.toggle("show");
    for (i = 0; i < list.length; i++) {
        list[i].classList.toggle("hide");
    }
    console.log("crossed pressed");
}

function mobileViewControl() {
    heading.classList.remove("show");

    if (window.matchMedia("(max-width: 768px)").matches) {
        navigation.classList.remove("sticky");
        ham.classList.add("show");
        heading_mobile.classList.remove("hide");
        heading.classList.remove("show");
        for (i = 0; i < list.length; i++) {
            list[i].classList.add("hide");
        }
    } else {
        heading_mobile.classList.add("hide");
    }
}
