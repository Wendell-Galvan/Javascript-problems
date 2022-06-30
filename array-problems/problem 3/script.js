//Define a function that takes in an array of numbers/integers and returns the sorted version of that array, greatest to least. 
//(Note: do NOT use the "reverse" method.)

//Example array: const myArray = [-3,8,7,6,5,-4,3,2,1];

//Hint: To solve this, look up the JavaScript array sort method, and pay close attention to how it uses it's return values 
//      of 1, 0, -1 to sort items.

/*
step 1: create a function that compares numbers with a and b as parameters. Return b - a in order to comapre numbers in descending order
step 2: create a function that sorts the numbers in an array passes as the parameter. Return array with sort() method passing
       compare function as argument.
step 3: call on sortNumbers function passing array of numbers as argument. 
*/



const numberArray = [-3,8,7,6,5,-4,3,2,1];

function compareNumbers(a, b) {
  return b - a;
}

function sortNumbers(array){
  return array.sort(compareNumbers);
}

console.log(sortNumbers(numberArray));