//Create an object, then write a JavaScript function that checks whether an object contains the specified key.

/*
step 1: create an object
step 2: create function that accepts object and key as parameters
step 3: use .hasOwnProperty on object with key as argument to determine if true or false 
*/


let ingredients = {
  sugar : '1 cup',
  eggs : 2,
  honey : '1 tablespoon'
};

function findIngredient (obj, key){
  return obj.hasOwnProperty(key);
}

console.log(findIngredient(ingredients, 'sugar'));