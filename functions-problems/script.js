//Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.

/*
step 1: create a variable with a string to be used as a parameter
step 2: create a function that will loop through string array
step 3: create a variable in the function that turns the string into an array
step 4: create a variable to be used for longest word
step 5: create an if statement to check if length of array is > than longest word
*/

let string = "This is a string to be analyzed";

function findLongestWord(str){
	let stringArray = str.split(" ");
	let longestWord = "";

	for (let i= 0; i < stringArray.length; i++){
		if (stringArray[i].length > longestWord.length){
			longestWord = stringArray[i];
		}
	}

	return longestWord;
};


console.log(findLongestWord(string));
