// Write a JavaScript function to compute the sum of an array of integers

/*
step 1: create array of integers 
step 2: create function that accepts array as parameter
step 3: write if statement that return the the integer if only 1 number is entered in array
step 4: write else statement to return sum of integers 
step 5: use .pop() method to return last element of array, then add it to call on function again with array as parameter. 
*/

const arrayOfIntegers = [1,4,23,6];

function findSum(arr) {
	if (arr.length === 1){
      return arr[0];
    } else {
      return arr.pop() + findSum(arr);
    }
};

console.log(findSum(arrayOfIntegers));