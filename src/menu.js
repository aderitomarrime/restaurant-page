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

cards.push(new Card("Yakisoba","Yakisoba brings together stir-fried wheat noodles with thinly sliced pork, crisp vegetables like cabbage, carrots, and bean sprouts, all coated in a tangy, savory sauce that's sweet, salty, and packed with umami.", yakisobaSrc));

cards.push(new Card("Fried Rice","A staple dish made by stir-frying cooked rice with eggs, vegetables, and proteins like chicken, shrimp, or pork. Quick, versatile, and full of flavour, Yangzhou fried rice with ham, shrimp, and peas is one of the most famous versions.", friedRiceSrc))

cards.push(new Card("Dim Sum","A  Cantonese tradition featuring a parade of bite-sized delights served in bamboo baskets. From steamed shrimp dumplings (har gow) to BBQ pork buns (char siu bao), there are over a thousand variations. Perfect for sharing with friends and family.",dimSumSrc))

function makeMenu(imgSrc, myTitle, myParagraph, myButton) {
    let divContent = document.querySelector('#content');

    const card = document.createElement('div');
    const image = document.createElement('img');
    const title = document.createElement('h1');
    const paragraph = document.createElement('p');
    const button = document.createElement('button');

    card.classList.add('card')

    image.src = imgSrc;
    title.textContent = myTitle;
    paragraph.textContent = myParagraph;
    button.textContent = myButton;

    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(paragraph);
    card.appendChild(button);

    divContent.appendChild(card);
}

export {cards, makeMenu};