// Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the 
// number of occurrences of the specified letter within the string.

/*
step 1: create function that accepts two parameters, a string and a letter
step 2: create a variable to count the number of letter
step 3: 
step 4: 
step 5: 
step 6: 
*/

let string = "This is a string to be analyzed";

function countLetterNumber(str, letter){
	let letterCounter = 0;

	for (let i = 0; i < str.length;i++){
		if (str.charAt(i) === letter){
			letterCounter ++;
		}
	}

	return letterCounter;
}

console.log(countLetterNumber(string, 'i'));