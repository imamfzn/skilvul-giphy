import React, { useState } from 'react';
import GifList from '../components/GifList';
import SearchBar from '../components/SearchBar';
import GiphyFetcher from '../helpers/GiphyFetcher';
import './Page.css';

function SearchGiphy() {
  const [input, setInput] = useState('');
  const [gifList, setGifList] = useState([]);
  const [typingTimeout, setTypingTimeout] = useState(0);
  const [firstTime, setFirstTime] = useState(true);

  const fetchData = async (keyword) => GiphyFetcher
    .fetch(keyword)
    .then((gifs) => {
      setGifList(gifs);
    });

  // handle searching after user typing+
  const searching = async (keyword) => {
    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }

    setInput(keyword);
    if (!keyword) {
      return;
    }

    setTypingTimeout(setTimeout(() => {
      fetchData(keyword).then(() => {
        // to make not found information showable
        if (firstTime) {
          setFirstTime(false);
        }
      });
    }, 500));
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
        <GifList gifs={gifList} firstTime={firstTime} />
      </div>
    </div>
  );
}

export default SearchGiphy;
