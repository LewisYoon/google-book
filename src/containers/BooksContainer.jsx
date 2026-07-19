import { useEffect, useState } from "react";
import { getBooksBySearchTerm } from "../services/books-services.js";
import BookList from "../components/BookList/BookList";
import classes from "./BooksContainer.module.scss";

const BooksContainer = ({ searchTerm }) => {
  const [books, setBooks] = useState(null);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!searchTerm) {
      return;
    }

    setStatus("loading");
    setError(null);

    getBooksBySearchTerm(searchTerm)
      .then((data) => {
        setStatus("success");
        setBooks(data);
      })
      .catch((err) => {
        setStatus("error");
        setError(err);
      });
  }, [searchTerm]);

  if (status === "idle") {
    return (
      <div className={classes.booksContainer__message}>
        <h3 className={classes.booksContainer__title}>Start Your Search</h3>

        <p className={classes.booksContainer__text}>
          Type a book title, author, or keyword above to search the Google Books
          library.
        </p>
      </div>
    );
  }

  if (status === "loading") {
    return (
      <div className={classes.booksContainer__loading}>
        <p>loading books...</p>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className={classes.booksContainer__message}>
        <h3 className={classes.booksContainer__title}>Something went wrong</h3>

        <p className={classes.booksContainer__text}>
          {error?.message || "Failed to search books."}
        </p>
      </div>
    );
  }

  if (status === "success") {
    return <BookList books={books} />;
  }
};

export default BooksContainer;
