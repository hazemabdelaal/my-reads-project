import React from 'react';
import ShelfChanger from './ShelfChanger';
import noImage from '../img/no-image.png';

const Book = ({ book, books, shelfChange }) => {
  // check if image thumbnail is available or pass a no image mock one
  const cover = book.imageLinks ? book.imageLinks.thumbnail : noImage;

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${cover})`,
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
