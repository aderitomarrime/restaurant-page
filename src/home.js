import imageSrc from "./images/chinese-food.png";

function makeHome() {

    let divContent = document.querySelector('#content');

    const textContainer = document.createElement('div');
    const imgContainer = document.createElement('div');
    const title = document.createElement('h1');
    const subTitle = document.createElement('h2');
    const paragraph = document.createElement('p');
    const button = document.createElement('button');
    const img = document.createElement('img');

    textContainer.classList.add('text');
    imgContainer.classList.add('img');

    title.textContent = "Asian Restaurant";
    subTitle.textContent = "A bowl of love from";
    paragraph.textContent = "Restaurant professional with a deep passion for authentic Chinese cuisine. Dedicated to preserving traditional recipes while delivering a modern dining experience that exceeds expectations.";
    button.textContent = "Order Now"

    img.src = imageSrc;

    divContent.appendChild(textContainer)
    textContainer.appendChild(subTitle)
    textContainer.appendChild(title)
    textContainer.appendChild(paragraph)
    textContainer.appendChild(button)

    divContent.appendChild(imgContainer);
    imgContainer.appendChild(img);
}

export {makeHome}