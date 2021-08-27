import './SearchBar.css';

function SearchBar({ keyword, setKeyword }) {
  const onChangeHandler = (e) => setKeyword(e.target.value);

  return (
    <div className="search-bar">
      <input
        className="form-control my-4"
        key="search-bar"
        value={keyword}
        placeholder="Search Giphy"
        onChange={onChangeHandler}
      />
    </div>
  );
}

export default SearchBar;
