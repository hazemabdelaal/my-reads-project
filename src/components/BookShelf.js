import React from 'react';
import Book from './Book';

const BookShelf = ({ title }) => {
  return (
    <div className="list-books-content">
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{title}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              <Book />
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookShelf;
