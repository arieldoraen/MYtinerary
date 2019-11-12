import React from 'react';
import '../App.css';
import axios from 'axios';


function Cities() {
  return (
    <div className="content" >
      <CityList />
    </div>
  );
}

class CityList extends React.Component {
  state ={
    citiesList: []
  }

  async componentDidMount(){
    const res =  await axios.get('http://localhost:5000/api/cities');
    this.setState({citiesList:res.data.cities});
    console.log(this.state.citiesList.cities);
  }
  render() {
    return <div className="row">
      <div className="col-md-4">
          Ciudades
      </div>
      <div className="col-md-8">
          <ul>
            {
              this.state.citiesList.map(cities => <li key={cities._id}>
                {cities.name} {cities.country}
              </li>)
            }
          </ul>
      </div>
    </div>


  }
}
export default Cities;