import React, { useState, useEffect } from 'react';
import GifList from './components/GifList';
import SearchBar from './components/SearchBar';

function SearchGiphy (props) {
  const [input, setInput] = useState('');
  const [gifList, setGifList] = useState([]);

  const fetchData = async (keyword = 'coding') => {
    return fetch(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_GIPHY_API_KEY}&q=${keyword}&limit=9`)
      .then(res => res.json())
      .then(res => res.data.map(data => {
        return {
          id: data.id,
          url: data.images.original.url
        };
      }))
      .then(gifs => {
        setGifList(gifs);
      });
  };

  const updateInput = async (keyword) => {
    setInput(keyword);
    fetchData(keyword);
  };

  useEffect(() => {
    const timeout = setTimeout(() => fetchData(), 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="container">
      <h1>Your Search Giphy</h1>

      <SearchBar
        keyword={input}
        setKeyword={updateInput}
      />

      <GifList gifs={gifList} />
    </div>
  );
}

export default SearchGiphy;
