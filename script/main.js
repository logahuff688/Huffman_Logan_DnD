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

		// the `` is a JavaScript template string. It tells the JS engine to evaluate the express
		puzzleBoard.style.backgroundImage = `url('images/backGround${this.id}.jpg')`;
	}

	// step 2
	// event handling always goes at the bottom =>
	// how do we want users to interact with our app
	// theButtons.addEventListener('click', changedBGImage)

	theButtons.forEach(button => button.addEventListener("click", changedBGImage));
	
})();
