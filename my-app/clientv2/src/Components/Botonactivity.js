import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import axios from 'axios'

class Activities extends React.Component {
    state ={
        listActivities: []
    }

    async componentDidMount() {
        await axios.get('http://localhost:5000/api/activity/'+this.props.itinerary)
            .then(res => this.setState({listActivities:res.data.response}));
        console.log(this.state.listActivities+"asd");
    }
    
    render() {
        return (
            <div className="content" >
                <div className="row" >
                    <div className="col-md-4" > actividades </div>
                    <div className="col-md-8" >
                        <ul > {
                            this.state.listActivities.map(activity => (
                                <li key={activity._id}>{activity.name}</li>
                            ))
                        } </ul>
                    </div>
                </div>
            </div>
        );
    }
}  
export default Activities;