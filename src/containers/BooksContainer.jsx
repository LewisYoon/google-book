import { useEffect, useState } from "react";
import { getBooksBySearchTerm } from "../services/books-services.js";
import BookList from "../components/BookList/BookList";

const BooksContainer = ({ searchTerm }) => {
  const [books, setBooks] = useState(null);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!searchTerm) {
      return;
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setStatus("loading");

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
    return <p>Search for a book...</p>;
  }

  if (status === "loading") {
    return <p>Loading books...</p>;
  }

  if (status === "error") {
    return <p style={{ color: "red" }}>{error.message}</p>;
  }

  if (status === "success") {
    return <BookList books={books} />;
  }
};

export default BooksContainer;
