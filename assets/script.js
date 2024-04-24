const slides = [
    { "image":"assets/images/slideshow/slide1.jpg", "tagLine":"Impressions tous formats <span>en boutique et en ligne</span>" },
    { "image":"assets/images/slideshow/slide2.jpg", "tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>" },
    { "image":"assets/images/slideshow/slide3.jpg", "tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>" },
    { "image":"assets/images/slideshow/slide4.png", "tagLine":"Autocollants <span>avec découpe laser sur mesure</span>" }
];

/*********************************** */

// ajoute dynamiquement les span.dot au html, en comptant les images du tableau 'slides'
function fonct_createDotSpan() {
    slides.forEach((_, index) => { 	// pour chaque entrée dans le tableau 'slides'
		const divDots = document.querySelector('#banner .dots'); // Sélectionne la div qui a id=banner class=.dots
        const spanDot = document.createElement('span'); // crée un span
        spanDot.classList.add('dot'); // ajoute la class .dot au spanDot
		
        if (index === 0) {	// Ajoute la classe .dot_selected au premier spanDot
            spanDot.classList.add('dot_selected');
        }

        divDots.appendChild(spanDot); // ajoute le spanDot dans divDots
    });
}

fonct_createDotSpan(); // ne pas oublier de Lancer la fonction ;)

/**************************************** */

let currentSlideIndex = 0; // La variable qui contiendra l'index du slide visible (0 au départ)

// Fonctionnement du carrousel

function fonct_updateCarrousel() {
    const imgBanner = document.querySelector('#banner .banner-img');
    const pBanner = document.querySelector('#banner p');
    const dotBanner = document.querySelectorAll('#banner .dot');

    imgBanner.src = slides[currentSlideIndex].image; // sélectionne l'image qui a l'index en cours dans le tableau slides
    pBanner.innerHTML = slides[currentSlideIndex].tagLine; // sélectionne le texte qui a l'index en cours dans le tableau slides
 
	dotBanner.forEach((dot, index) => {  // contrôle quel dot a l'index en cours et ajoute class selected
        if (index === currentSlideIndex) {
            dot.classList.add('dot_selected');
        } else {
            dot.classList.remove('dot_selected');
        }
    });
}

//Fonctionnement des flèches

const leftArrow = document.querySelector('#banner .arrow_left'); // Sélectionne les flèches à l'intérieur de la div html #banner
const rightArrow = document.querySelector('#banner .arrow_right');

leftArrow.addEventListener('click', fonct_leftArrowClick);  // Ajoute un écouteur d'événement 'click'
rightArrow.addEventListener('click', fonct_rightArrowClick);

function fonct_leftArrowClick() {
    if (currentSlideIndex === 0) { // si n° index = 0 
        currentSlideIndex = slides.length - 1; // indique dernier n° index (length-1) de 'slides'
    } else {
        currentSlideIndex -= 1; //décrémente l'index de 1
    }
    fonct_updateCarrousel(); 
}

function fonct_rightArrowClick() {
    if (currentSlideIndex === slides.length - 1) { // si n° index = le dernier
        currentSlideIndex = 0; // indique le premier n° index de 'slides'
    } else {
        currentSlideIndex += 1; //incrémente l'index de 1
    }
    fonct_updateCarrousel(); 
}


// autre option possible avec modulo














