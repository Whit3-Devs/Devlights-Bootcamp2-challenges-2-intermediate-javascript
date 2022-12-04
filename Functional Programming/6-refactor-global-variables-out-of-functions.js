// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(array ,bookName) {
let bookList = [...array];
  bookList.push(bookName);
  return bookList;
  
  // Change code above this line
}

// Change code below this line
function remove(array, bookName) {
  let bookList = [...array];
  const book_index = bookList.indexOf(bookName);
  if (book_index >= 0) {

    bookList.splice(book_index, 1);
    return bookList;

    // Change code above this line
    }
}