import React from 'react';
import Covid19 from './images/Covid19.jpg'
import styles from './App.module.css';
import {fetchGlobal} from './api';
import {Card, Chart, PickCountry,ChartSwitch} from './components';

class App extends React.Component{

  state={
    data:{},
    country:'',
    checked:false,
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


    handleChange = (e) => {
      if(e === 'Pie'){
      this.setState({
        checked: false
      });
      }
      else if(e === 'Bar')
      {
        this.setState({
          checked:true
        });
      }
    }

  render(){
    const {data,country,checked} =this.state;
    return (
      <div className = {styles.container}>
        <img src={Covid19} className={styles.Image} alt="Covid-19"></img>
        <Card data={data}/>
        <PickCountry handleCountryChange={this.handleCountryChange}/>
        {country ? <ChartSwitch handleChange={this.handleChange}/> : null}
        <Chart data={data} country={country} checked={checked}/>
      </div>
    )
  }
}

export default App;
