console.log('live')

const homeButton = document.querySelector('button:nth-child(1)');
const menuButton = document.querySelector('button:nth-child(2)');
const aboutButton = document.querySelector('button:nth-child(3)');
let divContent = document.querySelector('#content');

import {makeHome} from "./home.js";
import {cards, makeMenu} from "./menu.js";
import {makeAbout} from "./about.js";

makeHome()

homeButton.addEventListener('click', ()=> {
    divContent.textContent = '';
    makeHome()
})

menuButton.addEventListener('click', ()=> {
    divContent.textContent = '';
    for(const card of cards) {
        makeMenu(card.imageSrc, card.title, card.paragraph, card.button);
    }
})

aboutButton.addEventListener('click', ()=> {
    divContent.textContent = '';
    makeAbout();
})

