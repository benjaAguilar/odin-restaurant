import contentDiv from "./index.js";

let dishes = [
    {
        title: "Asado",
        imgUrl: "./img/asado.jpg",
        description: 
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Praesent id condimentum turpis. Pellentesque ultrices, 
        erat id tempor vestibulum, lacus lacus condimentum massa, 
        at gravida lectus mauris vitae lacus. Quisque luctus tincidunt 
        lacus non aliquet. In nec efficitur risus. Nullam vulputate 
        tristique lorem ut malesuada. Aenean venenatis vulputate nunc,
        quis sodales sem dapibus sed. Sed non nisi mauris.`
    },
    {
        title: "Skewer",
        imgUrl: "./img/skewer.jpg",
        description: 
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Praesent id condimentum turpis. Pellentesque ultrices, 
        erat id tempor vestibulum, lacus lacus condimentum massa, 
        at gravida lectus mauris vitae lacus. Quisque luctus tincidunt 
        lacus non aliquet. In nec efficitur risus. Nullam vulputate 
        tristique lorem ut malesuada. Aenean venenatis vulputate nunc,
        quis sodales sem dapibus sed. Sed non nisi mauris.`
    },
    {
        title: "Choripan",
        imgUrl: "./img/choripan.jpg",
        description: 
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Praesent id condimentum turpis. Pellentesque ultrices, 
        erat id tempor vestibulum, lacus lacus condimentum massa, 
        at gravida lectus mauris vitae lacus. Quisque luctus tincidunt 
        lacus non aliquet. In nec efficitur risus. Nullam vulputate 
        tristique lorem ut malesuada. Aenean venenatis vulputate nunc,
        quis sodales sem dapibus sed. Sed non nisi mauris.`
    }
];

export default function createMenu(){
    let cardContainer = document.createElement('div');
    cardContainer.classList.add('card-container');

    dishes.forEach(dish => {
        let card = document.createElement('div');
        let img = document.createElement('img');
        let dishTitle = document.createElement('h2');
        let para = document.createElement('p');

        card.classList.add('card');
        img.classList.add('img-dish');

        card.appendChild(img);
        card.appendChild(dishTitle);
        card.appendChild(para);

        img.src = dish.imgUrl;
        dishTitle.textContent = dish.title;
        para.textContent = dish.description;

        cardContainer.appendChild(card);
    });

    contentDiv.appendChild(cardContainer);
}