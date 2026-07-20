import classes from "./BookModal.module.scss";

const BookModal = ({ book, onClose }) => {
  const {
    title,
    authors,
    description,
    publisher,
    publishedDate,
    language,
    pageCount,
    categories,
    previewLink,
  } = book?.volumeInfo || {};

  return (
    <div className={classes.bookModal} onClick={onClose}>
      <div
        className={classes.bookModal__content}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={classes.bookModal__close} onClick={onClose}>
          ×
        </button>

        <h2 className={classes.bookModal__title}>{title}</h2>

        <p>{authors?.join(", ") || "Unknown Author"}</p>

        {publisher && <p>Publisher: {publisher}</p>}

        {publishedDate && <p>Published: {publishedDate}</p>}

        {language && <p>Language: {language}</p>}

        {pageCount && <p>Pages: {pageCount}</p>}

        {categories && <p>Category: {categories.join(", ")}</p>}

        <p className={classes.bookModal__description}>
          {description || "No description available."}
        </p>
        {previewLink && (
          <a
            href={previewLink}
            target="_blank" //opens in new tab
            className={classes.bookModal__preview}
          >
            Preview Book
          </a>
        )}
      </div>
    </div>
  );
};

export default BookModal;
