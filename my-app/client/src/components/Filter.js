import React, { Component } from "react";

class Filter extends Component {
    constructor(props) {
        super(props);
    }

    handleChange = e => {
        // filterPoets = (poetFilter) => {
        //   let filteredPoets = this.state.poets
        //   filteredPoets = filteredPoets.filter((poet) => {
        //     let poetName = poet.firstName.toLowerCase() + poet.lastName.toLowerCase()
        //     return poetName.indexOf(
        //       poetFilter.toLowerCase()) !== -1
        //   })
        //   this.setState({
        //     filteredPoets
        //   })
        // }
        // this.setState({
        //   poetFilter: e.target.value
        // })
        // this.props.onChange(event.target.value)
    };

    render() {
        return ( <
            div >
            <
            label htmlFor = "filter" > Filter: < /label> <
            input type = "text"
            id = "filter"
            value = { this.state.poetFilter }
            onChange = { this.handleChange }
            /> <
            /div>
        );
    }
}
const mapDispatchToProps = dispatch => {
    return {
        filterCities: (filteredCities, filter) => {
            dispatch({
                type: "filter_cities",
                payload: { filteredList: filteredCities, filter: filter }
            });
        }
    };
};
const mapStateToProps = state => {
    return {
        cities: state.cities,
        filter: state.filter
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Filter);