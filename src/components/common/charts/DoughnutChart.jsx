import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import style from './DoughnutChart.module.css'

const DoughnutChart = ({ title, labels, data }) => {
   console.log({ title, labels, data });
   const chartData = {
      labels,
      datasets: [{
         data,
         backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
         ],
         hoverBackgroundColor: [
            '#FF638450',
            '#36A2EB50',
            '#FFCE5650'
         ]
      }]
   };
   return (
      <div className={style.body}>
         <h5 className={style.title}>{title}</h5>
         <Doughnut data={chartData}
            height={60}
            width={100}
            legend={{
               display: false
            }}
         />
      </div>
   );
}

export default DoughnutChart;