// Santosh Parajuli 8826906

var slideIndex = 1;
window.onload = function () {
	document
		.getElementsByClassName("hamburger")[0]
		.addEventListener("click", toggleHamburger);
	document
		.getElementsByClassName("logo")[0]
		.addEventListener("click", function () {
			location.href = "/";
		});
	// using condition to use certain JS lines to be implemented in their respective pages to eliminate console error.
	if (window.location.href.includes("facts.html")){
		$("#accordion").accordion();
	}else if(window.location.href.includes("tictactoe.html")){

	}
	else{
		document
			.getElementsByClassName("prev")[0]
			.addEventListener("click", () => showSlides((slideIndex -= 1)));
		document
			.getElementsByClassName("next")[0]
			.addEventListener("click", () => showSlides((slideIndex += 1)));
		showSlides(slideIndex);
	}

};

// here we are displaying div with slides class name according to the slideIndex value that we are keeping track of.
var showSlides = function (n) {
	let i;
	let slides = document.getElementsByClassName("slides");
	// if slide is at last go to first slide
	if (n > slides.length) {
		slideIndex = 1;
	}
	// if slide is at first place show last slide
	if (n < 1) {
		slideIndex = slides.length;
	}
	// setting all slides as display none
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	//setting the only current slide as display block to view it
	slides[slideIndex - 1].style.display = "block";
};

// toggle hamburger menu to close icon and vice versa
var toggleHamburger = function (event) {
	event.preventDefault();
	var toggle = document.getElementById("toggleMenu");
	var mobileLinks = document.getElementsByClassName("mobileLinks");
	if (toggle.src.includes("/images/Close.png")) {
		toggle.src = "./images/Hamburger.png";
		mobileLinks[0].style.display = "none";
	} else {
		toggle.src = "./images/Close.png";
		mobileLinks[0].style.display = "flex";
	}
};
// there was a problem when hamburger menu was open and user resize the window the mobileLinks would be showing so in order to remove that we this code.
window.addEventListener("resize", function () {
	if (window.innerWidth > 750) {
		var mobileLinks = document.getElementsByClassName("mobileLinks");
		var toggle = document.getElementById("toggleMenu");
		mobileLinks[0].style.display = "none";
		toggle.src = "./images/Hamburger.png";
	}
});
