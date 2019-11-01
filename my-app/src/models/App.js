import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import circledArrow from '../images/circled-right-2.png';
import '../App.css';


function App() {
    return (
        <div className="App content" >
            <Header />
            <Content />
            <Footer />
        </div>
    );
}


class Content extends React.Component {
    render() {
        return <div className="App-content">
            <p>Find you perfect trip, designed by insiders who know and love their cities</p>
            <a className="App-link" href="/MYtinerary" target="" rel="noopener noreferrer" >
                <img src={circledArrow} className="App-circled" alt="logo" />
            </a>
        </div>
    }
}

export default App;