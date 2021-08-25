import React from 'react'
import GifList from './components/GifList';

class IronManGiphy extends React.Component {
  state = {
    gifs: []
  };

  componentDidMount() {
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_GIPHY_API_KEY}&q=iron+man&limit=10`)
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
      <div className="container">
        <h1>Iron Man Giphy</h1>
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}


export default IronManGiphy;
