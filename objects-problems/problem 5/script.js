//Write a JavaScript function to sort the following array of objects by title value.

/*
step 1: Create array of objects with multiple keys, one being titles of books 
step 2: Create function that uses .sort method on array. 
step 3: use a and b as parameters to be used for in comparison function 
step 4: create two variables that convert titles to lowercase 
step 5: compare names and return -1, 1 and 0, depending on the string comparison.
*/

 let bookArray = [
   { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},

   { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},

   { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}

   ];


console.log(bookArray.sort(function(a, b){
  let x = a.title.toLowerCase();
  let y = b.title.toLowerCase();
  if (x < y) {return -1;}
  if (x > y) {return 1;}
  return 0;
}));