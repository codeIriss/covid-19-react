import React, { Component } from 'react'
import Cards from './Components/Cards/Cards';
import Chart from './Components/Chart/Chart';
import Country from './Components/Country/Country';
import {fetchData} from './api/index';
import './App.css';

export default class App extends Component {
  state={
    data:{},
    country: '',
  }
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({data: fetchedData});
    
  }

  handleCountryChange = async (country) => {
    //fetch the data
    const fetchedData = await fetchData(country);
    //set the state
    this.setState({data: fetchedData, country:country});
  }
  render() {
    const {data, country} = this.state;
    return (
      
      <div className="container">
        <Cards data={data}/>
        <Chart data={data} country={country} />
        <Country handleCountryChange={this.handleCountryChange}/>
      </div>
    )
  }
}
