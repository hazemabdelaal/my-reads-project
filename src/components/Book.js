import React from 'react';
import ShelfChanger from './ShelfChanger';

const Book = ({ book, books, shelfChange }) => {
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${book.imageLinks.thumbnail})`,
            }}
          ></div>
          <ShelfChanger book={book} books={books} shelfChange={shelfChange} />
        </div>
        <div className="book-title">{book.title}</div>
        {book.authors &&
          book.authors.map((author, index) => (
            <div className="book-authors" key={index}>
              {author}
            </div>
          ))}
      </div>
    </li>
  );
};

export default Book;
