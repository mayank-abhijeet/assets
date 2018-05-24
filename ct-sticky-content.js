
window.onscroll = function () {
    scroll_function();
};
var para1 = document.getElementById("para1");
var para2 = document.getElementById("para2");
var para3 = document.getElementById("para3");
var para4 = document.getElementById("para4");
var para5 = document.getElementById("para5");
var content1=document.getElementById("content1");
var content2=document.getElementById("content2");
var content3=document.getElementById("content3");
var content4=document.getElementById("content4");
var content5=document.getElementById("content5");
var content1_selected=document.getElementById("content1-selected");
var content2_selected=document.getElementById("content2-selected");
var content3_selected=document.getElementById("content3-selected");
var content4_selected=document.getElementById("content4-selected");
var content5_selected=document.getElementById("content5-selected");

var para1Offset = para1.offsetTop;
var para2Offset = para2.offsetTop;
var para3Offset = para3.offsetTop;
var para4Offset = para4.offsetTop;
var para5Offset = para5.offsetTop;

content1.addEventListener("click",function(){
    var para1Position = para1Offset;
    window.scrollTo(0,para1Position);
    content1.classList.add("red");      content1_selected.classList.remove("hidden"); 
    content2.classList.remove("red");   content2_selected.classList.add("hidden");
    content3.classList.remove("red");   content3_selected.classList.add("hidden");
    content4.classList.remove("red");   content4_selected.classList.add("hidden");
    content5.classList.remove("red");   content5_selected.classList.add("hidden");
});

content2.addEventListener("click",function(){
    var para2Position = para2Offset;
    window.scrollTo(0,para2Position);    
    content2.classList.add("red");      content2_selected.classList.remove("hidden");
    content1.classList.remove("red");   content1_selected.classList.add("hidden");
    content3.classList.remove("red");   content3_selected.classList.add("hidden");
    content4.classList.remove("red");   content4_selected.classList.add("hidden");
    content5.classList.remove("red");   content5_selected.classList.add("hidden");
});

content3.addEventListener("click",function(){
    var para3Position = para3Offset;
    window.scrollTo(0,para3Position);    
    content3.classList.add("red");      content3_selected.classList.remove("hidden");
    content1.classList.remove("red");   content1_selected.classList.add("hidden");
    content2.classList.remove("red");   content2_selected.classList.add("hidden");
    content4.classList.remove("red");   content4_selected.classList.add("hidden");
    content5.classList.remove("red");   content5_selected.classList.add("hidden");
});

content4.addEventListener("click",function(){
    var para4Position = para4Offset;
    window.scrollTo(0,para4Position);
    content4.classList.add("red");      content4_selected.classList.remove("hidden");
    content1.classList.remove("red");   content1_selected.classList.add("hidden");
    content2.classList.remove("red");   content2_selected.classList.add("hidden");
    content3.classList.remove("red");   content3_selected.classList.add("hidden");
    content5.classList.remove("red");   content5_selected.classList.add("hidden");
});

content5.addEventListener("click",function(){
    var para5Position = para5Offset;
    window.scrollTo(0,para5Position);    
    content5.classList.add("red");      content5_selected.classList.remove("hidden");
    content1.classList.remove("red");   content1_selected.classList.add("hidden");
    content2.classList.remove("red");   content2_selected.classList.add("hidden");
    content3.classList.remove("red");   content3_selected.classList.add("hidden");
    content4.classList.remove("red");   content4_selected.classList.add("hidden");
});


function scroll_function(){
    if(Math.round(window.pageYOffset) >= para1Offset && Math.round(window.pageYOffset) < (para1Offset + para1.offsetHeight)){
        content1_selected.classList.remove("hidden");
        content1.classList.add("red");
    }else{
        content1_selected.classList.add("hidden");
        content1.classList.remove("red");
    }

    if(Math.round(window.pageYOffset) >= para2Offset && Math.round(window.pageYOffset) < (para2Offset + para2.offsetHeight)){
        content2_selected.classList.remove("hidden");
        content2.classList.add("red");        
    }else{
        content2_selected.classList.add("hidden");
        content2.classList.remove("red");        
    }

    if(Math.round(window.pageYOffset) >= para3Offset && Math.round(window.pageYOffset) < (para3Offset + para3.offsetHeight)){
        content3_selected.classList.remove("hidden");
        content3.classList.add("red");        
    }else{
        content3_selected.classList.add("hidden");
        content3.classList.remove("red");        
    }

    if(Math.round(window.pageYOffset) >= para4Offset && Math.round(window.pageYOffset) < (para4Offset + para4.offsetHeight)){
        content4_selected.classList.remove("hidden");
        content4.classList.add("red");        
    }else{
        content4_selected.classList.add("hidden");
        content4.classList.remove("red");        
    }

    if(Math.round(window.pageYOffset) >= para5Offset && Math.round(window.pageYOffset) < (para5Offset + para5.offsetHeight)){
        content5_selected.classList.remove("hidden");
        content5.classList.add("red");        
    }else{
        content5_selected.classList.add("hidden");
        content5.classList.remove("red");        
    }
}
