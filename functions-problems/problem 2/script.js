// Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.

//Hint: use the "spilt", the Array#includes method and, a "for" loop or "forEach" loop.

/*
step 1: create a function that accepts a string as a parameter 
step 2: create a variable to count the vowels
step 3: create an array definining vowels
step 4: create a variable to convert string into an array
step 5: create for loop to loop through array of letters
step 6: use .includes to see if string has includes any vowels. If so, add to vowel counter. 
step 7: return vowel counter, than call the function with a string a parameter.
*/


//variable as string to be passed into function 
let string = "This is a string to be analyzed";

function countVowels (str){
	let vowelCounter = 0;
	let vowels = ['a', 'e', 'i', 'o', 'u'];
	let letterArray = str.split("");
	
	for (let i = 0; i < letterArray.length; i++){
		// I initiatlly logged: if (letterArray[i].includes(vowels))  Why won't this work? 
		if (vowels.includes(letterArray[i])){
			vowelCounter++;
		}
	}

	return vowelCounter;
}

console.log(countVowels(string));