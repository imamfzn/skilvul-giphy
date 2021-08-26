import React, { useState } from 'react';
import GifList from './components/GifList';
import SearchBar from './components/SearchBar';
import './Page.css'

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
          url: data.images.fixed_height_downsampled.url
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
    setTypingTimeout(setTimeout(() => fetchData(keyword), 500));
  };

  return (
    <div className="fluid-container">
      <div className="header-container">
        <h1 className="menu-header">Search Your Giphy</h1>

        <SearchBar
          keyword={input}
          setKeyword={searching}
        />
      </div>

      <div className="gif-list-container">
        <GifList gifs={gifList} />
      </div>
    </div>
  );
}

export default SearchGiphy;
