//Write a JavaScript function to calculate the factorial of a number.

/*
step 1: create function that accepts number as paramater
step 2: write if statement to return -1 if number is less than 0 
step 3: write if else statement to return 1 if number is 0 
step 4: write else statement to return number that will calculate factorial of number entered, must call on function in this statement for recursion 
*/





function factorialize(num){
  if (num < 0){
    return -1;
  } else if (num === 0){
    return 1;
  } else {
    return (num * factorialize(num-1));
  }
}

console.log(factorialize(8));