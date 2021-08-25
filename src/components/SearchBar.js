import './SearchBar.css';

function SearchBar({ keyword, setKeyword }) {
  return (
    <input
      className="form-control my-4"
      key="search-bar"
      value={keyword}
      placeholder={"search your giphy"}
      onChange={ (e) => setKeyword(e.target.value) }
    />
  );
}

export default SearchBar;
