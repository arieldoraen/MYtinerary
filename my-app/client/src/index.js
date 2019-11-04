import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './models/App';
import Cities from "./models/Cities";
import UserCreate from './models/UserCreate';
import UserLog from './models/UserLog';
import MYtinerary from './models/MYtinerary';
import * as serviceWorker from './serviceWorker';


const routing = (
  <Router>
    <div>
      <Route path="/" component={App} />
      <Route path="/MYtinerary" component={MYtinerary} />
      <Route path="/CreateAccount" component={UserCreate} />
      <Route path="/Login" component={UserLog} />
      <Route path="/cities" component={Cities} />
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
