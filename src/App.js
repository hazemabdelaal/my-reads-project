import React from 'react';
import { Route } from 'react-router-dom';
// import * as BooksAPI from './BooksAPI'
import Home from './components/Home';
import Search from './components/Search';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Route exact path="/" component={Home} />
      <Route path="/search" component={Search} />
    </div>
  );
};

export default App;
