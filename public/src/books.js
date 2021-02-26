// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAuthorById(authors, id) {
  return authors.find((author) => author.id == id);
}

function findBookById(books, id) {
  return books.find((book) => book.id == id);
}

function partitionBooksByBorrowedStatus(books) {
  const borrowedList = books.filter((book) => book.borrows[0].returned === false);
  const availableList = books.filter((book) => book.borrows[0].returned == true);
  return [borrowedList, availableList];
}

function getBorrowersForBook(book, accounts) {
// loop through book.borrows array
//  book.borrows.id to accounts.id
// create account variable to store account info
// create a new accounts property to store returned status
// return the new array, limited to 10


const borrowHistory = book.borrows;
  let borrowersOfBook = borrowHistory.map((transaction) => {
    let account = accounts.find((account) => account.id === transaction.id);
    account.returned = transaction.returned;
    return account;
  });
 return borrowersOfBook.slice(0,10);
}



module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
