import React from 'react';
import circledArrow from '../images/circled-right-2.png';
import '../App.css';
import { Link } from 'react-router-dom'


function App() {
    return (
        <div className="App content" >
            <Content />
        </div>
    );
}


class Content extends React.Component {
    render() {
        return <div className="App-content">
            <p>Find you perfect trip, designed by insiders who know and love their cities</p>
            <Link className="App-link" to="/MYtinerary">
                <img src={circledArrow} className="App-circled" alt="logo" />
            </Link>
        </div>
    }
}

export default App;