// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAccountById(accounts, id) {
  return accounts.find((person) => person.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((account1, account2) => account1.name.last > account2.name.last ? 1 : -1);
}

function getTotalNumberOfBorrows(accounts, books) {
  let borrowList = books.map((booksChecked) => {
    let local = booksChecked.borrows;
    let idMatches = local.filter((idLocal) => idLocal.id === accounts.id);
    return idMatches;
  });
    let notBorrowed = borrowList.filter((empty) => empty == "");
    let borrowCount = borrowList.length - notBorrowed.length;
  return borrowCount;
}

function getBooksPossessedByAccount(account, books, authors) {
  //loop through the books array, and for each book embed the matching authors name as a new property in the book object
  //if the most recent trans matches the account id and the returned status is false, push book into result
let result = [];
books.forEach((book) => {
  let authorObj = authors.find(author => author.id === book.authorId);
  book.author = authorObj;
  if (book.borrows[0].id === account.id && book.borrows[0].returned === false) {
   result.push(book); 
  };
});
  return result;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};


