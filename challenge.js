const books = require("./books.json");

// function priceOfBook(bookName) {
//   // write your code here
// }

function affordableBooks(budget) {
  const Books = [];
  if(typeof budget == "number"){
    for (let i = 0; i < books.length; i++) {
    if(books[i].price>=budget){
      Books.push(books[i].title)
    }
    
  }
   return Books ;
  }
  else{
    return ` You entre a ${typeof budget} value`
  }
}


console.log(affordableBooks(12))


function findBookByGenre(genre) {
  const ArrayOfBooks = []; 
  
  for (let i = 0; i < books.length; i++) {
    const ArrayOfgenres = books[i].genres;
    for (let j = 0; j < ArrayOfgenres.length; j++) {
      if(ArrayOfgenres[j]==genre){
         ArrayOfBooks.push(books[i].title)
      }
      
    }
  } 
  if(ArrayOfBooks.length>0){

    return `[${ArrayOfBooks}]`;
     
}
else{
  return 'Aucun Books with this genre '
}
}

// function groupByGenre() {
//   // write your code here
// }

function sortBooksByPrice() {
  const n = books.length;
  // using the select sort 
  for (let i = 0; i < n - 1; i++) {
      let minIndex = i;

      for (let j = i + 1; j < n; j++) {
          if (books[j].price < books[minIndex].price) {
              minIndex = j;
          }
      }

      if (minIndex !== i) {
          [books[i], books[minIndex]] = [books[minIndex], books[i]]; // Swap
      }
  }

  return books;

}

// console.log(findBookByGenre("Fiction"))
// console.log(books[1].genres)
// console.log(sortBooksByPrice())

// (function main() {
//   try {
//     if (priceOfBook("The Alchemist") !== 9.49) {
//       throw new Error("priceOfBook is not working properly.");
//     }
//     if (affordableBooks(10).length !== 6) {
//       throw new Error("affordableBooks is not working properly.");
//     }
//     if (findBookByGenre("Fiction").length !== 7) {
//       throw new Error("findBookByGenre is not working properly.");
//     }
//     if (Object.keys(groupByGenre()).length !== 30) {
//       throw new Error("groupByGenre is not working properly.");
//     }
//     if (sortBooksByPrice()[0].price !== 5.99) {
//       throw new Error("sortBooksByPrice is not working properly.");
//     }
//     console.log("All tests passed successfully.");
//   } catch (error) {
//     console.log(error);
//   }
// })();

const budget = "ksks"

if(typeof budget == "number"){
  console.log('number')
}
else{
  console.log(typeof budget)
}
