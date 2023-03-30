const openMenu = document.getElementById("menuOpen");
const closeMenu = document.getElementById("menuClose");
const mobileMenu = document.getElementById("navMenuMobile");
const headerOverlay = document.getElementById("header");
const sunshineImage = document.getElementById("sunshine");
const skiesImage = document.getElementById("skies");
const riverImage = document.getElementById("river");
const coverData = document.getElementById("coverData");


//event listeners 
openMenu.addEventListener("click", () => {
     mobileMenu.classList.add("navMenu-opened");
     headerOverlay.classList.add(".navMenu-opened");
});

closeMenu.addEventListener("click", () => {
    mobileMenu.classList.remove("navMenu-opened");
    headerOverlay.classList.remove(".navMenu-opened");
});  

window.addEventListener("scroll", ()=>{
    let scrollPoint = window.scrollY;

    riverImage.style.transform = "translateY(" + -scrollPoint * 0.02 +"%)";
    skiesImage.style.transform = "translateY(" + -scrollPoint * 0.04 +"%)";
    sunshineImage.style.transform = "translateY(" + -scrollPoint * 0.01 +"%)";
    coverData.style.transform = "translateY(" + scrollPoint * 0.03 +"%)"; 
    coverData.style.transform = 1 - scrollPoint * 0.002; 
})