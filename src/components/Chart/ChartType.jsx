import React from 'react';
import {Bar,Doughnut} from 'react-chartjs-2';

const ChartType = ({data:{confirmed,deaths,recovered},country,checked}) => {
    
    const PieChart = (
        confirmed ?
       (<Doughnut
           data={{
               datasets: [{
                   data:[confirmed.value,deaths.value,recovered.value],
                   backgroundColor:[
                       'rgba(0, 0, 255, 0.5)',
                       'rgba(255, 0, 0, 0.5)',
                       'rgba(0, 255, 0, 0.5)'
                   ]
               }],
               labels: [
                   'Infected',
                   'Deaths',
                   'Recovered'
               ]
           }}
           options={{
               legend:{display:false},
               title: {display:true, text:`Showing ${country} country`}
           }}
       />)
       : null
   );

   const BarChart=(
       confirmed ?
       (
           <Bar 
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
        <>
        {checked? BarChart : PieChart}
        </>
    )
}

export default ChartType;
