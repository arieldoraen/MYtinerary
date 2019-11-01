import React from 'react';
import logo from '../images/MYtineraryLogo.png';
import '../App.css';

class Header extends React.Component {
    render() {
        return <header className="App-header" >
            <img src={logo} className="App-logo" alt="logo" />
        </header>
    }
}
export default Header;