import classes from "./Header.module.scss";

const Header = () => {
  return (
    <header className={classes.header}>
      <h1>
        <span className={classes.header__blue}>Lew_B</span>
        <span className={classes.header__red}>o</span>
        <span className={classes.header__yellow}>o</span>
        <span className={classes.header__blue}>g</span>
        <span className={classes.header__green}>l</span>
        <span className={classes.header__red}>e</span>
      </h1>

      <p>Search millions of books using Google Book API</p>
    </header>
  );
};

export default Header;
