 (() => {
	// set up the puzzle pieces and boards


	// variables always go at the top
	// these are the connections that you're making to elements on the page
	// using CSS to select with JavaScript
	let theButtons = document.querySelectorAll('#buttonHolder img'),
	theHeading = document.querySelector('#headLine h1'),
	theSubheading = document.querySelector('#headLine p'),
	puzzleBoard = document.querySelector('.puzzle-board'),
	puzzlePieces = document.querySelectorAll('.puzzle-pieces img'),
	dropZones = document.querySelectorAll('.drop-zone'),
	// store the dragged piece in a global variable
	// because we need it in the handleDrop function
	draggedPiece;

	// step 3
	// functionality always goes in the middle -> how do we want the app to behave?

	function changedBGImage() {

		// the `` is a JavaScript template string. It tells the JS engine to evaluate the express
		puzzleBoard.style.backgroundImage = `url('images/backGround${this.id}.jpg')`;
	}

	function handleStartDrag() {
		console.log(`started dragging this piece:`, this); // store a reference to the puzzle piece image that we're dragging
		// so we can use it later and move it to a drop zone
		draggedPiece = this;
	}

	function handleDragOver() {
		console.log('dropped something on me');
	}

	function handleDrop() {
		console.log('dropped something on me');        
		// this line is going to move the dragged piece from the left side of the board
		// into whatever drop zone we choose. appendChild means "add element to the conatiner"
		this.appendChild(draggedPiece);
	}

	// step 2

	// event handling always goes at the bottom =>
	// how do we want users to interact with our app
	// theButtons.addEventListener('click', changedBGImage)

	theButtons.forEach(button => button.addEventListener("click", changedBGImage));

	// add the drag event handling to the puzzle pieces
	puzzlePieces.forEach(piece => piece.addEventListener('dragstart', handleStartDrag));

	// add the dragover AND the drop event handlin in the drop zones
	dropZones.forEach(zone => zone.addEventListener("dragover", handleDragOver));

	// add the drop event handling
	dropZones.forEach(zone => zone.addEventListener("drop", handleDrop));
	
})();
