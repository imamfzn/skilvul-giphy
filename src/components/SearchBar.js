import './SearchBar.css';

function SearchBar({ keyword, setKeyword }) {
  return (
    <div className="search-bar">
      <input
        className="form-control my-4"
        key="search-bar"
        value={keyword}
        placeholder={"Search Giphy"}
        onChange={ (e) => setKeyword(e.target.value) }
      />
    </div>
  );
}

export default SearchBar;
