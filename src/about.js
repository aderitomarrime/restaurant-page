import "./styles/about.css";

function makeAbout() {

    let divContent = document.querySelector('#content');

    const title = document.createElement('h1');
    const paragraph = document.createElement('p');
    const secondParagraph = document.createElement('p');
    const thirdParagraph = document.createElement('p');

    divContent.className = "about-us";
    divContent.classList.remove('menu')

    title.textContent = "About Us";
    paragraph.textContent = "Welcome to Asian Restaurant, where the bold, aromatic spices of China meet the delicate, umami-rich traditions of Japan. Our menu is a curated journey through Asia's most beloved dishes from the fiery wok-tossed Chow Mein and savoury Yakisoba to delicate Dim Sum and crispy Spring Rolls.";
    secondParagraph.textContent = "We believe that great food starts with great ingredients. That's why we source fresh produce, premium meats, and authentic sauces to ensure every dish is packed with flavour. Our chefs combine time-honoured recipes with a passion for excellence, delivering food that is both comforting and exciting.";
    thirdParagraph.textContent = "Whether you're here for a quick lunch with colleagues, a cosy dinner with family, or a takeaway treat to enjoy at home, we're committed to making every visit memorable. Warm hospitality, generous portions, and consistent quality, that's our promise to you.";

    divContent.appendChild(title);
    divContent.appendChild(paragraph);
    divContent.appendChild(secondParagraph);
    divContent.appendChild(thirdParagraph);
}

export {makeAbout}