import classes from "./BookList.module.scss";
import BookCard from "../BookCard/BookCard";

const BookList = ({ books }) => {
  return (
    <div className={classes.bookList}>
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
