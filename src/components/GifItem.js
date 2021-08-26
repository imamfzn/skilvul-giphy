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
    <div className="col-md-4 col-sm-6 gif-item">
      <img className="gif-loading" src={Loading} style={ isLoaded ? hideImgStyle : {} } alt=""/>
      <img className="gif-img" src={gif.url} onLoad={onLoadHandler} style={ isLoaded ? {} : hideImgStyle } alt=""/>
    </div>
  );
}

export default GifItem;
