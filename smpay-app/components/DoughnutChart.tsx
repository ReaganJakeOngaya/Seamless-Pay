"use client"
import React from 'react';
import {Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
  const data = {
    datasets: [
      {
        label: 'Banks',
        data: [21133, 45353, 37754],
        backgroundColor: ['#3984b4', '#428be6', '#4c3ef5'],
      },
    ],
    labels: ['Bank 1', 'Bank 2', 'Bank 3'],
  };
  return (
    <Doughnut
      data={data}
      cutout={'50%'}
      options={{
        plugins: {
          legend: {
            display: false,
          },
        },
      }}
    />
  )
};

export default DoughnutChart;