import classes from "./Header.module.scss";

const Header = () => {
  return (
    <header className={classes.header}>
      <h1>Google Books Search</h1>
      <p>Search millions of books from the Google Books library.</p>
    </header>
  );
};

export default Header;
