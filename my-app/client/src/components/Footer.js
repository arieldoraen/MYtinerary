import React from 'react';
import UserInfo from '../components/UserInfo';
import homeIcon from '../images/homeIcon.png';
import '../App.css';

class Footer extends React.Component {
    render() {
        return <div className="App-footer">
            <p>Want to build your own MYntinerary?</p>
            <UserInfo />
            <a className="App-link" href="/" target="" rel="noopener noreferrer" >
                <img src={homeIcon} className="App-homeIcon" alt="logo" />
            </a>
        </div>
    }
}
export default Footer;