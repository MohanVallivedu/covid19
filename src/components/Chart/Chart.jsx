import React from 'react';
import {useState,useEffect} from 'react';
import  {fetchDailyData} from '../../api'
import {Line,Bar} from 'react-chartjs-2';
import styles from './Chart.module.css';


const Chart = ({data:{confirmed,recovered,deaths},country}) => {

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

    const BarChart = (
         confirmed ?
        (<Bar 
            data={{
                labels:['Cofirmed','Deaths','Recovered'],
                datasets:[{
                    label:'People',
                    backgroundColor:[
                        'rgba(0, 0, 255, 0.5)',
                        'rgba(255, 0, 0, 0.5)',
                        'rgba(0, 255, 0, 0.5)'
                    ],
                    data:[confirmed.value,deaths.value,recovered.value]
                }]
            }}
            options={{
                legend:{display:false},
                title: {display:true, text:`Showing ${country} country`}
            }}
        
        />)
        : null
    );


    return(
        <div className={styles.container}>
            {country ? BarChart : LineChart}
        </div>
    )

}

export default Chart;