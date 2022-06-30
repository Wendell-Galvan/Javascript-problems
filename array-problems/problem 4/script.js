//Write a JavaScript function to remove duplicate items from an array (consider case sensitivity).

//Example array: [1,2,2,4,5,4,7,8,7,3,6]

//NOTE: Do NOT use the Set method.

/*
step 1: create function that removes duplicate characters and uses an array as parameter
step 2: create empty array to represent new array of new characters
step 3: use for.Each() method on array to loop through array
step 4: create an if statement that checks for duplicate elements, if so, push that element into new array. 
*/

let numberArray = [1,2,2,4,5,4,7,8,7,3,6];

function removeDuplicates(array){
	let uniqueNums = [];

	array.forEach((i) => {
		if (!uniqueNums.includes(i)) {
        uniqueNums.push(i);
	}
});

	return uniqueNums;
}

console.log(removeDuplicates(numberArray));

