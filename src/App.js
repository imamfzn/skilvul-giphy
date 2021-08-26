import { Link } from 'react-router-dom';

import giphyMainLogo from './img/giphy-main-logo.svg';

import './App.css';


function App() {
  return (
    <div className="App container">
      <div className="main-menu">
        <h1 className="header"> Welcome to Your Giphy </h1>

        <img src={giphyMainLogo} className="giphy-main-logo img-fluid" alt=""/>

        <ul className="list-menu">
          <li><Link to="/iron-man-giphy">Iron Man Giphy</Link></li>
          <li><Link to="/search-giphy">Search your Giphy</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default App;
