/*
Define a function that takes in an array of elements and joins them together into a string separated by a comma with a space after the comma.

Example array: let colors = ["Red", "Green", "White", "Black"];

Should look like: "Red, Green, White, Black"
*/

/*
step 1: Create function that converts array into string with elements seperated by comma and a space
step 2: use .join() method with comma and a space in the ().
step 3: call on function with array passsed as argument. 
*/


let colorArray = ["Red", "Green", "White", "Black"];

function turnArrayIntoString(array){
	return array.join(", ");
}

console.log(turnArrayIntoString(colorArray));