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
  }, []);

  return (
    <div className="app">
      <Route exact path="/" render={() => <Home books={books} />} />
      <Route path="/search" render={() => <Search books={books} />} />
    </div>
  );
};

export default App;
