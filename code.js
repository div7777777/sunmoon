
const mySun = document.querySelector(".sun");
const myMoon = document.querySelector(".moon");
const myBody = document.querySelector(".body");

mySun.addEventListener("click", ()=>{
mySun.style.transform = "translateX(80px)";
myMoon.style.transform = "translateX(0px)";
myBody.style.background = "black";
myBody.style.color = "white";
myMoon.style.opacity = "1";
mySun.style.opacity = "0";
mySun.style.transition = "0.9s";
});
myMoon.addEventListener("click", ()=>{
    myMoon.style.transform = "translateX(-80px)";
    mySun.style.transform = "translateX(0px)";
    myBody.style.background = "white";
    myBody.style.color = "black";
    myMoon.style.opacity = "0";
    mySun.style.opacity = "1";
    myMoon.style.transition = "0.9s";
    });


    