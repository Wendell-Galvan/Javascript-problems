//Create a basic HTML page with a P element and a button on it.

//Then, write a JavaScript function to set the background color of that paragraph using an "onclick" event added to a button in the UI.

function myFunction(){
	let paragraph = document.getElementById("paragraph");
	console.log(paragraph);
	paragraph.style.backgroundColor = "red";
}