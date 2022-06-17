// Write a JavaScript function that iterates the integers from 1 to 100. 
// But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". 
// For numbers that are multiples of both three and five print "FizzBuzz"

/*
step 1: create function with for loop to iterate through integers 1-100. 
step 2: Create if..else if statement to check for multiples of 3 and 5, then 3 only, then 5 
step 3: Use % operator to check if number is divisible by 3 or 5 (remainder equal to 0)
step 4: If multiple of 3 && 5, print "FizzBuzz"
step 5: if multiple of 3 only, print "Fizz"
step 6: if multiple of 5 only, print "Buzz"
*/


function findMultiples() {
	for (let i = 1; i <= 100; i++){
		if (i%3 === 0 && i%5 === 0){
			console.log(`${i}: FizzBuzz`);
		}  else if (i%3 === 0){
			console.log(`${i}: Fizz`);
		} else if (i%5 === 0){
			console.log(`${i}: Buzz`);
		}
	}
}

findMultiples();
