import React,{Component} from 'react'
import jwt_decode from 'jwt-decode'
import Sidebar from '../Components/Sidebar'
class Profile extends Component{

    constructor(){
        super()
        this.state={
            name:'',
            email:'',
            
        }
    }
    componentDidMount(){
        if (localStorage.getItem('usertoken')) {
            const token= localStorage.usertoken
            const decoded=jwt_decode(token)
            console.log(decoded)
            this.setState({
                name:decoded.name,
                email:decoded.email
            })
        }

        else { this.props.history.push("/Home")}
       
    }
    render(){
        return(
            <div className="container">
                <div>
                    <Sidebar/>
                    <div >
                        <h1 >
                            Profile
                        </h1>
                    </div>
                    <table>
                        <tbody>
                            <tr> 
                            <td>name</td>
                            <td>{this.state.name}</td>
                            </tr>
                            <tr>
                            <td>Email</td>
                            <td>{this.state.email}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Profile