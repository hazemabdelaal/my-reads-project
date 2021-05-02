import React from 'react';

const ShelfChanger = ({ book, books, shelfChange }) => {
  const shelfUpdate = e => shelfChange(book, e.target.value);

  // set current shelf to a default of none
  let currShelf = 'none';

  // if book is in current list, set the currShelf to book.shelf
  for (let item of books) {
    if (item.id === book.id) {
      currShelf = item.shelf;
    }
  }

  return (
    <div className="book-shelf-changer">
      <select onChange={shelfUpdate} defaultValue={currShelf}>
        <option value="move" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

export default ShelfChanger;
