import React, { useState } from 'react';
import './GifItem.css';
import Loading from '../loading.gif';

function GifItem({ gif }) {
  const [isLoaded, setLoaded] = useState(false);

  const onLoadHandler = () => {
    setLoaded(true);
  };

  const hideImgStyle = {
    display: 'none'
  };

  return (
    <div className="col-md-4 col-sm-6">
      <div className="gif-container">
        <img className="gif-loading" src={Loading} style={ isLoaded ? hideImgStyle : {} } alt=""/>
        <div className="gif-content" style={ isLoaded ? {} : hideImgStyle } >
          <a href={gif.gifUrl} target="__blank">
            <img className="gif-img rounded" src={gif.url} onLoad={onLoadHandler} alt=""/>
            <div className="gif-meta">
              <strong><p className="text-center">{gif.title}</p></strong>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default GifItem;
