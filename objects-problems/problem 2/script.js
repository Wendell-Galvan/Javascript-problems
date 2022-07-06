//Create an array of people objects with first name, last name, and age, 
//then write a JavaScript function that takes in an array and console logs the first and last names of all the people.

/*
step 1: create array with objects as people in array
step 2: include first name, last name, and age for each object
step 3: create a function that accepts array as parameter 
step 4: create for loop to loop through each object in array
step 5: console.log first name and last names. Use array[i].firstName and array[i].lastName to identify object properties. 
*/


const people = [
  {
    firstName : 'Wendell',
    lastName : 'Galvan',
    age : 28
  },
  {
    firstName : 'Hannah',
    lastName : 'Galvan',
    age : 25 
  },
  {
    firstName : 'Christian',
    lastName : 'Galvan',
    age : 20
  }
];

function displayNames (nameArray){
  for (let i = 0; i < nameArray.length; i++){
    console.log(nameArray[i].firstName + " " + nameArray[i].lastName)
  };
}

console.log(displayNames(people));