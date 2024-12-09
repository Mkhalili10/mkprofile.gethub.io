var menu = document.querySelector(".fixmenu");
var smenu = document.querySelector(".smenu");
var menuIcon = document.getElementById("menu")
var lis = document.querySelectorAll("li")
var flag = true

// menu transmition
function flagmenu () {
    if(flag) {
        menu.style.display = "block"
        menu.style.width = "20%";
        smenu.style.width = "100%";
        lis[0].style.display = "block";
        lis[1].style.display = "block";
        lis[2].style.display = "block";
        lis[3].style.display = "block";
        lis[4].style.display = "block";
        lis[5].style.display = "block";
    }else {
        lis[0].style.display = "none";
        lis[1].style.display = "none";
        lis[2].style.display = "none";
        lis[3].style.display = "none";
        lis[4].style.display = "none";
        lis[5].style.display = "none";
        smenu.style.width = "0";
        menu.style.width = "0";
    }
    flag = !flag
}
menuIcon.addEventListener("click", flagmenu)

// 
function checkWidth() {
    if (window.innerWidth > 800) {
        menu.style.display = "none";
    } 
}

checkWidth();
window.addEventListener("resize", checkWidth);

// home onclick 
let home = document.getElementById("home")
function gotoHome() {
    window.scrollTo(0, 0);
}
home.addEventListener("click", gotoHome)

// about onclick 
let about = document.getElementById("about")
function gotoAbout() {
    window.scrollTo(0, 900);
}
about.addEventListener("click", gotoAbout)

// show about 
let test = document.querySelector(".about-main")
let pic = document.getElementById("image")
pic.classList.add("active")

function showAbout () {
    let windowHieght = window.innerHeight;
    let top = test.getBoundingClientRect().top;
    let top1 = pic.getBoundingClientRect().top;

    
    if(top1 < -140) {
        pic.classList.remove("active")
    }
    else if(top1 < windowHieght) 
        pic.classList.add("active")

    if(top < windowHieght - 200) 
        test.classList.add("active")
    else
        test.classList.remove("active")


}
window.addEventListener("scroll", showAbout)