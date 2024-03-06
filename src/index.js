const contentDiv = document.querySelector('#content');
const homeBtn = document.querySelector('#home-btn');
const menuBtn = document.querySelector('#menu-btn');
const aboutBtn = document.querySelector('#about-btn');
let lastBtn;

export default contentDiv;
import createHome from "./home.js";
import createMenu from "./menu.js";
import createAbout from "./about.js";

navigate(homeBtn);
createHome();
lastBtn = homeBtn;

function navigate(clickedBtn){
    if(lastBtn != undefined){
        lastBtn.disabled = false;
        lastBtn.classList.remove('selected');

    }

    clickedBtn.disabled = true;
    clickedBtn.classList.add('selected');

    while(contentDiv.firstChild){
        contentDiv.removeChild(contentDiv.firstChild);

    }
}

homeBtn.addEventListener("click", () => {
    navigate(homeBtn);
    lastBtn = homeBtn;
    createHome();
});

menuBtn.addEventListener("click", () => {
    navigate(menuBtn);
    lastBtn = menuBtn;
    createMenu();
});

aboutBtn.addEventListener("click", () => {
    navigate(aboutBtn);
    lastBtn = aboutBtn;
    createAbout();
});