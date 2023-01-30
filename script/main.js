(() => {
	// set up the puzzle pieces and boards


	// variables always go at the top
	// these are the connections that you're making to elements on the page
	// using CSS to select with JavaScript
	let theButtons = document.querySelectorAll("#buttonHolder img"),
	theHeading = document.querySelector("#headLine h1");
	theSubheading = document.querySelector('#headLine p')
	puzzleBoard = document.querySelector(".puzzle-board")

	// step 3
	// functionality always goes in the middle -> how do we want the app to behave?

	function changedBGImage() {
	// debugger;
	theHeading.textContent = "Super Awesome Drag and Drop Game!"
	
	// start with the object, and then change a property or run a method
	theHeading.classList.add('orange-headline')
	theSubheading.classList.add('blue-headline')
	let theNewSource = "images/backGround" + this.id + ".jpg";

	console.log(theNewSource);

 }

	// step 2
	// event handling always goes at the bottom =>
	// how do we want users to interact with our app
	// theButtons.addEventListener('click', changedBGImage)

	theButtons.forEach(button => button.addEventListener("click", changedBGImage));
	
})();
