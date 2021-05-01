import React from 'react';
import ShelfChanger from './ShelfChanger';

const Book = ({ cover, title, authors, books }) => {
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: cover,
          }}
        />
        <ShelfChanger />
      </div>
      <div className="book-title">{title}</div>
      {authors.map((author, index) => (
        <div className="book-authors" key={index}>
          {author}
        </div>
      ))}
    </div>
  );
};

export default Book;
