import { useState } from "react";

const SearchBar = ({ placeholder, labelText, id, onSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim()) {
      onSearch(inputValue);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={id}>{labelText}</label>

      <input
        id={id}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder={placeholder}
      />

      <button>Search</button>
    </form>
  );
};

export default SearchBar;
