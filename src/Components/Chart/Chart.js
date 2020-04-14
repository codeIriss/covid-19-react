import React,{useState,useEffect} from 'react';
import {fetchDailyData } from '../../api/index';
import { Line ,Bar} from 'react-chartjs-2';

import './Chart.css';

const Chart = ({data:{confirmed,recovered,deaths},country}) => {
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
        setDailyData( await fetchDailyData());
        }
        fetchAPI();
    },[]);

    console.log(confirmed,recovered,deaths);
    const lineChart = (
        dailyData.Length !== 0 ?
       ( <Line data={{
            labels: dailyData.map(({date}) => date),
            datasets:[{
                data: dailyData.map(({confirmed}) => confirmed),
                label: 'Infected',
                borderColor:'#01CBC6',
                fill:true,
            },{
                data: dailyData.map(({deaths}) => deaths),
                label: 'Deaths',
                borderColor:'#red',
                backgroundColor: '#EA425C',
                fill:true,
            }],
            
        }}
        />) : null
    );


    const barChart = (
        confirmed ? 
        <Bar
            data={{
                labels: ['Infected', 'Recovered', 'Deaths'],
                datasets: [{label: 'People',
                backgroundColor:['#01CBC6','#1BCA9B','#EA425C'],
                data:[confirmed.value,recovered.value,deaths.value]
                }]
            }}
            options={{
                legend: {display:false},
                title: {display: true, text:` Country Data : ${country} `}
            }}
        /> : null
    );
    return (
        <div className="container">
            {country ? (barChart ): lineChart}
        </div>
    )
}

export default Chart;
