import { Link } from 'react-router-dom';

import giphyMainLogo from './img/giphy-main-logo.svg';

import './App.css';


function App() {
  return (
    <div className="App">
      <div className="main-menu">
        <h1> Welcome to Skilvul Giphy </h1>

        <img src={giphyMainLogo} className="giphy-main-logo" alt=""/>

        <ul className="list-menu">
          <li><Link to="/iron-man-giphy">Iron Man Giphy</Link></li>
          <li><Link to="/search-giphy">Search your Giphy</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default App;
