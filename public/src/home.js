// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  const borrowList = books.map((booksChecked) => {
    const local = booksChecked.borrows;
    const borrowedBooks = local.filter((idLocal) => idLocal.returned === false);
    return borrowedBooks;
  });
    const notBorrowed = borrowList.filter((empty) => empty == "");
    const borrowCount = borrowList.length - notBorrowed.length;
  return borrowCount;   
}

function getMostCommonGenres(books) {
  const genres = books.reduce((acc, book) => {
    const genreObj = acc.find((genre) => genre.name === book.genre);
    if (genreObj != undefined) {
    genreObj.count++;
    } else {
    acc.push({
      name: book.genre,
      count: 1
      });
    };
  return acc;
  }, []);
  const sortedGenres = genres.sort((genre1, genre2) => genre1.count < genre2.count ? 1 : -1);
  return sortedGenres.slice(0, 5);
}


function getMostPopularBooks(books) {
  let popularBooks = [];
  books.forEach((book) => {
     popularBooks.push({name:book.title, count:book.borrows.length})
  })
  const sortedBooks = popularBooks.sort((book1, book2) => book1.count < book2.count ? 1: -1)
  return sortedBooks.slice(0,5)
}

function getMostPopularAuthors(books,authors) {
  //assign empty array 
  let returnArr = []; 
  authors.forEach((author) => { 
  //create a new object with  authors' first name and last name with count 
    const returnAuthor = { name: `${author.name.first} ${author.name.last}`, count: 0 };
  //loop and match authorID with book's author.id and update count
    books.forEach((book) => {
      if (book.authorId == author.id) {
        returnAuthor.count = book.borrows.length
        returnArr.push(returnAuthor)
      };
    });
  });
  const sortedArray = returnArr.sort((author1, author2) => author1.count < author2.count ? 1: -1)
  return sortedArray.slice(0,5)
}
    


module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
