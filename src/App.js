import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Home from './components/Home';
import Search from './components/Search';
import './App.css';

const App = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    (async () => {
      const booksList = await BooksAPI.getAll();
      setBooks(booksList);
    })();
  });

  const shelfChange = async (changedBook, shelf) => {
    const newShelf = await BooksAPI.update(changedBook, shelf);

    // changing the shelf for book
    changedBook.shelf = newShelf;

    // update books state, remove the changedBook and add it to array
    setBooks(
      books.filter(book => book.id !== changedBook.id).concat(changedBook)
    );
  };

  return (
    <div className="app">
      <Route
        exact
        path="/"
        render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>My Reads</h1>
            </div>
            <Home books={books} shelfChange={shelfChange} />
          </div>
        )}
      />
      <Route
        path="/search"
        render={() => <Search books={books} shelfChange={shelfChange} />}
      />
    </div>
  );
};

export default App;
