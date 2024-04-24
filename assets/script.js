const slides = [
    { "image":"assets/images/slideshow/slide1.jpg", "tagLine":"Impressions tous formats <span>en boutique et en ligne</span>" },
    { "image":"assets/images/slideshow/slide2.jpg", "tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>" },
    { "image":"assets/images/slideshow/slide3.jpg", "tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>" },
    { "image":"assets/images/slideshow/slide4.png", "tagLine":"Autocollants <span>avec découpe laser sur mesure</span>" }
];

/*********************************** */
// Sélectionne les flèches à l'intérieur de la div #banner
const leftArrow = document.querySelector('#banner .arrow_left');
const rightArrow = document.querySelector('#banner .arrow_right');

// Ajoute des écouteurs d'événements
leftArrow.addEventListener('click', fonct_leftArrowClick);
	console.log("écouteur sur flèche gauche");
rightArrow.addEventListener('click', fonct_rightArrowClick);
	console.log("écouteur sur flèche droite");

 // Fonctions pour gérer les clics sur les flèches
 function fonct_leftArrowClick() {
	console.log("Flèche gauche cliquée");
	alert("Flèche gauche cliquée");
}

function fonct_rightArrowClick() {
	console.log("Flèche droite cliquée");
	alert("Flèche droite cliquée");
}
/************************************ */

// ajoute dynamiquement les span.dot au html, en comptant les images du tableau 'slides'
function fonct_createDotSpan() {
    slides.forEach((_, index) => { 							// pour chaque entrée dans le tableau 'slides'
		const divDots = document.querySelector('#banner .dots'); 	// Sélectionne la div qui a id=banner class=.dots
        const spanDot = document.createElement('span'); 	// crée un span
        spanDot.classList.add('dot'); 						// ajoute la class .dot au span
		
        if (index === 0) {									// Ajoute la classe .dot_selected au premier spanDot
            spanDot.classList.add('dot_selected');
        }

        divDots.appendChild(spanDot); 						// ajoute le spanDot dans divDots
    });
}

fonct_createDotSpan(); // ne pas oublier de Lancer la fonction ;)









