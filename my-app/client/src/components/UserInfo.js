import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom'

class UserInfo extends React.Component {
    render() {
        return <div className="row">
            <Link className="col-5" to="/Login" >Log in</Link><div className="col-2" />
            <Link className="col-5" to="/CreateAccount" >Create Account</Link>
        </div>


    }
}
export default UserInfo;