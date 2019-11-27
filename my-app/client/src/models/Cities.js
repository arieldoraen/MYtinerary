import React from "react";
import "../App.css";
import axios from "axios";
import { connect } from "react-redux";

class Cities extends React.Component {
    constructor(props) {
        super(props);
    }

    async componentDidMount() {
        await axios
            .get("http://localhost:5000/api/cities")
            .then(res => this.props.listCities(res.data.response));
        console.log(this.props.cities);
    }
    render() {
        return (
            <div className="content" >
                <div className="row" >
                    <div className="col-md-4" > Ciudades </div>
                    <div className="col-md-8" >
                        <ul > {
                            this.props.cities.map(city => (
                                <li key={city._id} > {city.name} {city.country}
                                </li>
                            ))
                        } </ul>
                    </div>
                </div>
            </div>
        );
    }
}
const mapDispatchToProps = dispatch => {
    return {
        listCities: dataCities => {
            dispatch({ type: "list_cities", payload: dataCities });
        }
    };
};
const mapStateToProps = state => {
    return {
        cities: state.cities
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cities);