import React from 'react';
import GifList from '../components/GifList';
import GiphyFetcher from '../helpers/GiphyFetcher';
import './Page.css';

class IronManGiphy extends React.Component {
  constructor() {
    super();

    this.state = {
      gifs: []
    };
  }

  componentDidMount() {
    GiphyFetcher
      .fetch('iron man')
      .then((gifs) => this.setState({ gifs }));
  }

  render() {
    const { gifs } = this.state;

    return (
      <div className="fluid-container">
        <div className="header-container">
          <h1 className="menu-header">Iron Man Giphy</h1>
        </div>

        <div className="gif-list-container">
          <GifList gifs={gifs} />
        </div>
      </div>
    );
  }
}

export default IronManGiphy;
