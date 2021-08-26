import React, { useState } from 'react';
import GifList from './components/GifList';
import SearchBar from './components/SearchBar';

function SearchGiphy (props) {
  const [input, setInput] = useState('');
  const [gifList, setGifList] = useState([]);
  const [typingTimeout, setTypingTimeout] = useState(0);

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

  // handle searching after user typing+
  const searching = async (keyword) => {
    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }

    setInput(keyword);
    setTypingTimeout(setTimeout(() => fetchData(keyword), 1000));
  };

  return (
    <div className="container">
      <h1>Your Search Giphy</h1>

      <SearchBar
        keyword={input}
        setKeyword={searching}
      />

      <GifList gifs={gifList} />
    </div>
  );
}

export default SearchGiphy;
