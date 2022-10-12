const navToggler = document.querySelector(".mobile__menu");
const navLinks = document.querySelectorAll(".header__link");

navToggler.addEventListener("click" , changeMenuState);


function changeMenuState() {
    const menuItems = document.querySelector("ul.header__menu");
    const navIcon = document.querySelectorAll(".navIcon");
 
    menuItems.classList.toggle("show");
 
    navIcon.forEach(icon => {
        icon.classList.toggle("hidden");
    });
}


function onMenuClick() {
    console.log(navLinks);
    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener("click" , changeMenuState);
    }
}



onMenuClick();
