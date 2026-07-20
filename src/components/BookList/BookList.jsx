import classes from "./BookList.module.scss";
import BookCard from "../BookCard/BookCard";
import BookModal from "../BookModal/BookModal";
import { useState } from "react";

const BookList = ({ books }) => {
  //states clicked book to diplay modals
  const [clickedBook, setClickedBook] = useState(null);
  return (
    <>
      <div className={classes.bookList}>
        {/*Map through books array and render BookCard for each book-*/}
        {books.map((book) => (
          <BookCard
            key={book.id}
            book={book}
            onClick={() => setClickedBook(book)}
          />
        ))}
      </div>
      {clickedBook && (
        <BookModal book={clickedBook} onClose={() => setClickedBook(null)} />
      )}
    </>
  );
};

export default BookList;
