import React from 'react'
import GifList from './components/GifList';
import './Page.css'

class IronManGiphy extends React.Component {
  state = {
    gifs: []
  };

  componentDidMount() {
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_GIPHY_API_KEY}&q=iron+man&limit=9`)
      .then(res => res.json())
      .then(res => res.data.map(data => {
        return {
          id: data.id,
          url: data.images.original.url
        };
      }))
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
