import contentDiv from "./index.js";

export default function createAbout(){
    let h2 = document.createElement('h2');
    let para = document.createElement('p');
    let anchor = document.createElement('a');

    h2.textContent = "Passion for our culture";
    para.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Praesent id condimentum turpis. Pellentesque ultrices, 
                        erat id tempor vestibulum, lacus lacus condimentum massa, 
                        at gravida lectus mauris vitae lacus. Quisque luctus tincidunt 
                        lacus non aliquet. In nec efficitur risus. Nullam vulputate 
                        tristique lorem ut malesuada. Aenean venenatis vulputate nunc,
                        quis sodales sem dapibus sed. Sed non nisi mauris.`;
    anchor.textContent = "Contact us!";
    
    h2.classList.add('about-title');
    para.classList.add('about-para');
    anchor.classList.add('h-about');

    contentDiv.appendChild(h2);
    contentDiv.appendChild(para);
    contentDiv.appendChild(anchor);
}