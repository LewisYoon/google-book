import classes from "./BookCard.module.scss";

const BookCard = ({ book }) => {
  const {
    title = "Untitled Book",
    authors,
    description,
    // imageLinks,
    publishedDate,
    publisher,
  } = book?.volumeInfo || {};

  const authorText = authors?.join(", ") || "Unknown Author";

  // Get higher resolution image by removing the zoom parameter from Google Books URL
  const imageUrl = (book) => {
    const thumbnail = book.volumeInfo.imageLinks?.thumbnail;
    return thumbnail?.replace("&zoom=1", "");
  };

  return (
    <article className={classes.bookCard}>
      {/* <img
          src={imageLinks?.thumbnail}
          alt={title}
          className={classes.bookCard__image}
          loading="lazy"
        /> */}
      <img
        src={imageUrl(book)}
        alt={title}
        className={classes.bookCard__image}
      />

      <div className={classes.bookCard__overlay}>
        <span className={classes.bookCard__meta}>
          {publishedDate ? publishedDate.split("-")[0] : "N/A"}
        </span>

        <h2 className={classes.bookCard__title}>{title}</h2>

        <p className={classes.bookCard__author}>{authorText}</p>

        {publisher && (
          <p className={classes.bookCard__publisher}>{publisher}</p>
        )}

        <p className={classes.bookCard__description}>
          {description || "No description"}
        </p>
      </div>
    </article>
  );
};

export default BookCard;
