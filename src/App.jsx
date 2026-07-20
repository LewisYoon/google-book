import { useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import BooksContainer from "./containers/BooksContainer";
function App() {
  const [searchTerm, setSearchTerm] = useState(null);
  const onSearch = (value) => setSearchTerm(value);
  return (
    <>
      <Header />
      <SearchBar
        labelText={"Search for books"}
        placeholder="harry potter..."
        id="search-bar"
        onSearch={onSearch}
      />
      <BooksContainer key={searchTerm} searchTerm={searchTerm} />
    </>
  );
}

export default App;
