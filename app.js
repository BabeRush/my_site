"use strict";
const menu = document.querySelector('#mobile_menu');
const scrolled_menu = document.querySelector('.navbar_menu');

function scroller(){
    menu.classList.toggle('is-active');
    scrolled_menu.classList.toggle('active');
}

menu.addEventListener('click',scroller);

let images = ['img1.JPG','img2.JPG','img4.JPG'];
let i = 0;
function slideShow(){
    document.getElementById('image').src=images[i];
    if(i<images.length-1){
        i++;
    }else{
        i=0;
    }
    setTimeout("slideShow()", 3000);
}

window.onload = slideShow;