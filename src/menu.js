import "./styles/menu.css";

import yakisobaSrc from "./images/yakisoba.png";
import friedRiceSrc from "./images/fried-rice.png";
import dimSumSrc from "./images/dim-sum.png";

class Card {
    button = "Order Now"
    constructor(title, paragraph, imgageSrc) {
        this.title = title;
        this.paragraph = paragraph;
        this.imageSrc = imgageSrc;
    }
}

const cards = [];

cards.push(new Card("Yakisoba","Stir-fried wheat noodles with pork, cabbage, and carrots in a sweet, savory umami sauce.", yakisobaSrc));

cards.push(new Card("Fried Rice","Quick stir-fried rice with eggs, veggies, and protein. Famous Yangzhou version includes ham, shrimp, and peas.", friedRiceSrc))

cards.push(new Card("Dim Sum","Cantonese bite-sized delights in bamboo baskets, like har gow and char siu bao. Over 1,000 variations, perfect for sharing.", dimSumSrc))

function makeCard(imgSrc, myTitle, myParagraph, myButton) {
    let divContent = document.querySelector('#content');

    const card = document.createElement('div');
    const imageContainer = document.createElement('div');
    const image = document.createElement('img');
    const title = document.createElement('h1');
    const paragraph = document.createElement('p');
    const button = document.createElement('button');

    card.classList.add('card');
    imageContainer.classList.add('image-container');
    divContent.classList.add('menu');

    image.src = imgSrc;
    title.textContent = myTitle;
    paragraph.textContent = myParagraph;
    button.textContent = myButton;

    card.appendChild(imageContainer);
    imageContainer.appendChild(image);
    card.appendChild(title);
    card.appendChild(paragraph);
    card.appendChild(button);

    divContent.appendChild(card);
}

function makeMenu() {
    for(const card of cards) {
        makeCard(card.imageSrc, card.title, card.paragraph, card.button);
    }
}

export {cards, makeMenu};