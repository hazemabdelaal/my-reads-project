import React from 'react';
import Book from './Book';

const BookShelf = ({ books, shelfChange }) => {
  return (
    <ol className="books-grid">
      {books.map(book => (
        <Book
          key={book.id}
          book={book}
          books={books}
          shelfChange={shelfChange}
        />
      ))}
    </ol>
  );
};

export default BookShelf;
