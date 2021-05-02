import React from 'react';
import BookShelf from './BookShelf';

const BookShelfList = ({ books, shelfChange }) => {
  const shelves = [
    { type: 'currentlyReading', title: 'Currently Reading' },
    { type: 'wantToRead', title: 'Want to Read' },
    { type: 'read', title: 'Read' },
  ];

  return (
    <div className="list-books-content">
      {shelves.map((shelf, index) => {
        const shelfBooks = books.filter(book => book.shelf === shelf.type);
        return (
          <div className="bookshelf" key={index}>
            <h2 className="bookshelf-title">{shelf.title}</h2>
            <div className="bookshelf-books"></div>
            <BookShelf books={shelfBooks} shelfChange={shelfChange} />
          </div>
        );
      })}
    </div>
  );
};

export default BookShelfList;
