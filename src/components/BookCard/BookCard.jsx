import classes from "./BookCard.module.scss";

const BookCard = ({ book }) => {
  const { title, authors, description, imageLinks, publishedDate, publisher } =
    book.volumeInfo;

  return (
    <article className={classes.card}>
      <img
        src={imageLinks?.thumbnail || "https://via.placeholder.com/150"}
        alt={title}
      />

      <div className={classes.content}>
        <h2>{title}</h2>

        <p>{authors?.join(", ") || "Unknown author"}</p>

        <p>{publisher || "Unknown publisher"}</p>

        <p>{publishedDate || "Unknown date"}</p>

        <p>{description || "No description available"}</p>
      </div>
    </article>
  );
};

export default BookCard;
