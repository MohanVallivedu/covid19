import React from 'react';
import {useState,useEffect} from 'react';
import  {fetchDailyData} from '../../api'
import {Line} from 'react-chartjs-2';
import styles from './Chart.module.css';
import ChartType from './ChartType';


const Chart = ({data,country,checked}) => {

    const [dataDaily, setdataDaily] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
           setdataDaily(await fetchDailyData());
        }
        fetchData();
        
    },[]);

    const LineChart = (
        dataDaily !== undefined ?
        (<Line 
            data={{
                labels: dataDaily.map(({date}) => date),
                datasets:[{
                    data: dataDaily.map(({confirmed}) => confirmed),
                    label:'confirmed',
                    borderColor:'#3333ff',
                    fill:true,
                },{
                    data: dataDaily.map(({deaths}) => deaths),
                    label:'deaths',
                    borderColor:'red',
                    backgroundColor:'rgba(255,0,0,0.5)',
                    fill:true,
                }],
            }}
        />)
        : null
    );

    

    return(
        <div className={styles.container}>
            {country ? <ChartType data={data} country={country} checked={checked}/> : LineChart }
        </div>
    )

}

export default Chart;