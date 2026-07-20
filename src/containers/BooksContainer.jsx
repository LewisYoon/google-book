import { useEffect, useState } from "react";
import { getBooksBySearchTerm } from "../services/books-services.js";
import BookList from "../components/BookList/BookList";
import classes from "./BooksContainer.module.scss";

const BooksContainer = ({ searchTerm }) => {
  // Stores fetched books, current fetch status, and errors
  const [books, setBooks] = useState(null);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!searchTerm) {
      return;
    }

    // Set loading state before fetching data
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setStatus("loading");
    setError(null);

    // Fetch books from Google Books API
    getBooksBySearchTerm(searchTerm)
      .then((data) => {
        // Store fetched books and update status
        setStatus("success");
        setBooks(data);
      })
      .catch((err) => {
        // Store error message when API request fails
        setStatus("error");
        setError(err);
      });
  }, [searchTerm]);

  // Initial state before user searches
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

  // Display loading state while fetching books
  if (status === "loading") {
    return (
      <div className={classes.booksContainer__loading}>
<<<<<<< HEAD
        {/* adds spinner */}
        <div className={classes.booksContainer__spinner}></div>
        <p className={classes.booksContainer__loadingText}>Loading...</p>
=======
        {/*adds spinner*/}
        <div className={classes.booksContainer__spinner}></div>
        <p>Loading...</p>
>>>>>>> e6bad84 (adds spin animation for loading && fixed default white search bar appearing)
      </div>
    );
  }

  // Display error message if API request fails
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

  // Bonus MVP: Display message when search returns no books
  if (status === "success" && books.length === 0) {
    return (
      <div className={classes.booksContainer__message}>
        <h3 className={classes.booksContainer__title}>No Books Found</h3>

        <p className={classes.booksContainer__text}>
          No books found for "{searchTerm}". Try searching with a different
          title, author, or keyword.
        </p>
      </div>
    );
  }

  // Render book list when books are successfully fetched
  if (status === "success") {
    return <BookList books={books} />;
  }
};

export default BooksContainer;
