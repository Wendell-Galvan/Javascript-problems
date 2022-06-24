//Write a JavaScript function that takes in two parameters, an array and a number (n), 
//and return the first n elements of that array.

//Example: If I pass in an array and the number 2, 
//your function returns the first 2 elements in that array.

/* 
step 1: create a function that accepts an array and a number (n) as parameters, and return the (n)
        elements of the array
step 2: Create if statement that returns an error message if number passed is less than 1 
step 3: Create an if statement that returns a en error message if number passed is greater than array.length
step 4: use .slice() method to include elements specified in the number parameter (0, n) 0=start n=stop
*/ 


let nameArray = ['Bob', 'Joe', 'Mike', 'Steve', 'Larry', 'Chris'];

function returnArrayElements(array, n){
  
  if (n < 1){
    return "Please type in a postive integer.";
  }
  
  if (n > array.length){
    return "there are not this many items in the list, please try again.";
  }
  
  return array.slice(0, n);
}

console.log(returnArrayElements(nameArray, 3));
