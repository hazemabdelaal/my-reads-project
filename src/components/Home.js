import React from 'react';
import { Link } from 'react-router-dom';
import BookShelfList from './BookShelfList';

const Home = ({ books, shelfChange }) => {
  return (
    <div>
      <BookShelfList
        title="Currently Reading"
        books={books}
        shelfChange={shelfChange}
      />
      <div className="open-search">
        <Link className="button" to="/search">
          Add a book
        </Link>
      </div>
    </div>
  );
};

export default Home;
