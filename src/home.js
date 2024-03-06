import contentDiv from "./index.js";

export default function createHome(){
    let subtitle = document.createElement('p');
    let h1 = document.createElement('h1');
    let anchor = document.createElement('a');

    subtitle.textContent = "Argentinian restaurant";
    h1.textContent = "GAUCHO";
    anchor.textContent = "View menu";

    subtitle.classList.add('sub');
    anchor.classList.add('h-menu');

    contentDiv.appendChild(subtitle);
    contentDiv.appendChild(h1);
    contentDiv.appendChild(anchor);
}
