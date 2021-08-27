import React from 'react'
import GifList from './components/GifList';
import GiphyFetcher from './helpers/GiphyFetcher'
import './Page.css'

class IronManGiphy extends React.Component {
  state = {
    gifs: []
  };

  componentDidMount() {
    GiphyFetcher
      .fetch('iron man')
      .then(gifs => this.setState({ gifs }));
  }

  render() {
    return (
      <div className="fluid-container">
        <div className="header-container">
          <h1 className="menu-header">Iron Man Giphy</h1>
        </div>

        <div className="gif-list-container">
          <GifList gifs={this.state.gifs} />
        </div>
      </div>
    );
  }
}

export default IronManGiphy;
