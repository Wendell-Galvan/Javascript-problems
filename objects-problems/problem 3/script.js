//Create an object with three items in it, 
//then write a JavaScript function that accepts an object and tells you the length (tells you how many items are in it) of the object.

/*
step 1: create object with 3 items
step 2: create function that accepts an object as parameter and tells how many items are in object
step 3: use Object.keys to return an array of object's enumerable property names, then use .length to return number of elements
*/

let car = {
  make : "toyota",
  model : 'tacoma',
  color : 'silver'
};

function numOfItems (obj){
  return Object.keys(obj).length;
}

console.log(numOfItems(car));