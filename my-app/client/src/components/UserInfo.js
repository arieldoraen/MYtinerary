import React from 'react';
import '../App.css';

class UserInfo extends React.Component {
    render() {
        return <div className="row">
            <a className="col-5" href="/Login" >Log in</a><div className="col-2" />
            <a className="col-5" href="/CreateAccount" >Create Account</a>
        </div>


    }
}
export default UserInfo;