import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from './App';
import IronManGiphy from './pages/IronManGiphy'
import SearchGiphy from './pages/SearchGiphy'
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route exact path="/iron-man-giphy" component={IronManGiphy} />
        <Route exact path="/search-giphy" component={SearchGiphy} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
