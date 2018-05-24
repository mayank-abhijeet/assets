window.onscroll = function () {
    makeitstick();
    scroll_function();
};
window.onresize = function () {
    mobileViewControl();
    makeitstick();
};

var navigation = document.getElementById("navigation");
var list = document.querySelectorAll('.list');
var ham = document.getElementById("ham");
var heading = document.getElementById("heading");
var heading_mobile = document.getElementById("heading-mobile");
var home=document.querySelector(".home");
var content=document.querySelector(".content");
var for_you_overlay=document.getElementById("for_you_overlay");
var bread=document.querySelector(".bread");

var sticky = navigation.offsetTop;
var hamSticky = ham.offsetTop;

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


home.addEventListener("mouseover",function(event){
    for_you_overlay.classList.remove("hidden"); 
    if (window.pageYOffset-5 >= sticky){
        for_you_overlay.classList.add("advertisement-scroll");
        for_you_overlay.classList.remove("advertisement");
    }else{
        for_you_overlay.classList.remove("advertisement-scroll");
        for_you_overlay.classList.add("advertisement");
    }
         
    
    console.log("over home 1"); 
});

for_you_overlay.addEventListener("mouseenter",function(event){
    for_you_overlay.classList.remove("hidden"); 
    if (window.pageYOffset-5 >= sticky){
        for_you_overlay.classList.add("advertisement-scroll");
        for_you_overlay.classList.remove("advertisement");
    }else{
        for_you_overlay.classList.remove("advertisement-scroll");
        for_you_overlay.classList.add("advertisement");
    }    
});
for_you_overlay.addEventListener("mouseleave",function(event){
    for_you_overlay.classList.add("hidden"); 
    if (window.pageYOffset-5 >= sticky){
        for_you_overlay.classList.add("advertisement-scroll");
        for_you_overlay.classList.remove("advertisement");
    }else{
        for_you_overlay.classList.remove("advertisement-scroll");
        for_you_overlay.classList.add("advertisement");
    }        
     
});

home.addEventListener("click",function(){
for_you_overlay.classList.toggle("hidden");
if (window.pageYOffset-5 >= sticky){
    for_you_overlay.classList.add("advertisement-scroll");
    for_you_overlay.classList.remove("advertisement");
}else{
    for_you_overlay.classList.remove("advertisement-scroll");
    for_you_overlay.classList.add("advertisement");
}    

});

bread.addEventListener("mouseover",function(){
    console.log("over bread");
});

if(navigation.classList.contains("sticky")){
    content.classList.add("padding-for-content");
}
else{
    content.classList.remove("padding-for-content");
    
}




function scroll_function(){
    var content=document.querySelector(".content");
    if(navigation.classList.contains("sticky")){
        content.classList.add("padding-for-content");
    }
    else{
        content.classList.remove("padding-for-content");
        
    }
}


function makeitstick() {

    if (window.pageYOffset-5 >= sticky) {
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
        for_you_overlay.classList.remove("advertisement-scroll");
        for_you_overlay.classList.add("advertisement");
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
        ham.classList.remove("hideHam");        
        content.classList.remove("padding-for-content");    
        for (i = 0; i < list.length; i++) {
            list[i].classList.add("hide");
        }
        
    } else {
        heading_mobile.classList.add("hide");
        ham.classList.add("hideHam");
        heading.classList.add("hide");
    }
}
