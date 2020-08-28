import React from 'react';
import Covid19 from './images/Covid19.jpg'
import styles from './App.module.css';
import {fetchGlobal} from './api';
import {Card, Chart, PickCountry} from './components';

class App extends React.Component{

  state={
    data:{},
    country:'',
  }

  async componentDidMount(){
    const resp = await fetchGlobal();
    this.setState({
      data: resp
    });
  }

  handleCountryChange = async (country) => {
    const resp = await fetchGlobal(country);
    this.setState({
      data: resp, country:country,
    });
  }

  render(){
    const {data,country} =this.state;
    return (
      <div className = {styles.container}>
        <img src={Covid19} className={styles.Image} alt="Covid-19"></img>
        <Card data={data}/>
        <PickCountry handleCountryChange={this.handleCountryChange}/>
        <Chart data={data} country={country}/>
      </div>
    )
  }
}

export default App;
