//Create an HTML page with a dropdown list with three items in it
//then write a JavaScript function that displays the number of items and displays the item in the list when you select from the dropdown.



function getOptions() {
	const myHobbies = document.getElementById('hobbies')

	const numOfitems = document.getElementById("hobbies").length;
	console.log(numOfitems);

	document.getElementById("demo").innerHTML = "You selected: " + x;


}