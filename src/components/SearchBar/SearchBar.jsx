import { useState } from "react";
import classes from "./SearchBar.module.scss";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ placeholder, labelText, id, onSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim()) {
      onSearch(inputValue);
    }
  };

  return (
    <div className={classes.searchBar}>
      <form onSubmit={handleSubmit} className={classes.searchBar__form}>
        <label htmlFor={id} className={classes.searchBar__label}>
          {labelText}
        </label>
        <div className={classes.searchBar__group}>
          <div className={classes.searchBar__inputWrapper}>
            <input
              id={id}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={placeholder}
              className={classes.searchBar__input}
            />
          </div>
          <button className={classes.searchBar__button}>
            {" "}
            <FaSearch />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
