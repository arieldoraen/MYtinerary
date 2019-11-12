import React from 'react';
import UserInfo from '../components/UserInfo';
import homeIcon from '../images/homeIcon.png';
import '../App.css';
import { Link } from 'react-router-dom'

class Footer extends React.Component {
    render() {
        return <div className="App-footer">
            <p>Want to build your own MYntinerary?</p>
            <UserInfo />
            <Link className="App-link" to="/home">
                <img src={homeIcon} className="App-homeIcon" alt="logo" />
            </Link>
        </div>
    }
}
export default Footer;