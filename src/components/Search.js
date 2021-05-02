import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';
import * as BooksAPI from '../BooksAPI';

const Search = ({ books, shelfChange }) => {
  const [term, setTerm] = useState('');
  const [newBooks, setNewBooks] = useState([]);

  const searchBooks = e => {
    const term = e.target.value;
    setTerm(term);

    // if input searches successfully
    if (term) {
      (async () => {
        const recievedBooks = await BooksAPI.search(term);
        recievedBooks.length > 0 ? setNewBooks(recievedBooks) : setNewBooks([]);
      })();

      // if input failes to search
    } else {
      setNewBooks([]);
    }
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title or author"
            value={term}
            onChange={searchBooks}
          />
        </div>
      </div>
      <div className="search-books-results">
        {newBooks.length > 0 && (
          <div>
            <ol className="books-grid">
              {newBooks.map(book => (
                <Book
                  key={book.id}
                  book={book}
                  books={books}
                  shelfChange={shelfChange}
                />
              ))}
            </ol>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
