import classes from "./BookCard.module.scss";

const BookCard = ({ book, onClick }) => {
  const { title, authors, description, imageLinks, publishedDate, publisher } =
    book?.volumeInfo || {}; //optional chaning, if book exists, get the volume info, otherwise returns empty object
  //seperates authors by , if there are mutiple authors
  const authorsText = authors?.join(", ") || "Unknown Author";
  // Remove Google Books zoom parameter to request higher resolution image
  const imageUrl = imageLinks?.thumbnail?.replace("zoom=1", "");
  return (
    <article className={classes.bookCard} onClick={onClick}>
      <img src={imageUrl} alt={title} className={classes.bookCard__image} />

      <div className={classes.bookCard__overlay}>
        <span className={classes.bookCard__meta}>
          {publishedDate ? publishedDate.split("-")[0] : "N/A"}
        </span>

        <h2 className={classes.bookCard__title}>
          {title || "Title not avaialble"}
        </h2>

        <p className={classes.bookCard__author}>{authorsText}</p>

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
