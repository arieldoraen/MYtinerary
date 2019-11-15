import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter, Redirect } from 'react-router-dom';
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import App from './models/App';
import Cities from "./models/Cities";
import UserCreate from './models/UserCreate';
import UserLog from './models/UserLog';
import MYtinerary from './models/MYtinerary';
import * as serviceWorker from './serviceWorker';


const routing = (
  <div className="App">
    <div className='headerClass'><Header/></div>
      <BrowserRouter>
      <div>
        <Route exact path="/home" component={App} />
        <Route path="/MYtinerary" component={Cities} />
        <Route path="/CreateAccount" component={UserCreate} />
        <Route path="/Login" component={UserLog} />
        <Route path="/cities" component={Cities} />
        <Redirect from="/" exact to="/home" />
      </div>
      <div className='footerClass'><Footer/></div>
    </BrowserRouter>
    
  </div>
  
)

ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
