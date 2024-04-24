const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
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



