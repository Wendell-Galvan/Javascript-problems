//Create a sample object, then write a JavaScript function that deletes the property of an object passed to it.

//Your JavaScript function should take in two parameters, the object and the key/property you want to delete.

/*
step 1: create object with properties (key-value pairs)
step 2: create function that accepts object and key/property you want to delete
step 3: use "delete" operator to delete the object and property passed into function parameters
*/

let car = {
	make : 'Toyota',
	model : 'Tacoma',
	year : 2003,
	color : 'silver'
};

function deleteProperty (obj, key){
	delete obj[key];
	return obj;
}

console.log(deleteProperty(car, 'make'));

