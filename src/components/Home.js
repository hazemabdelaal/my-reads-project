import React from 'react';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf';

const BooksLibrary = () => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <BookShelf title="Currently Reading" />
      <div className="open-search">
        <Link className="button" to="/search">
          Add a book
        </Link>
      </div>
    </div>
  );
};

export default BooksLibrary;
