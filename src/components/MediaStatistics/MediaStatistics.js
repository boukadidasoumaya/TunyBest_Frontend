import React from "react";
import "./MediaStatistics.css";
import { Bar } from "react-chartjs-2";

const MediaStatistics = ({ chartData }) => {
  const options = {
    indexAxis: "y", // Use 'y' for horizontal bar chart
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const value = Number(context.parsed);
            return value.toFixed(1) + "%";
          },
        },
      },
    },
    scales: {
      x: {
        ticks: {
          beginAtZero: true,
          callback: (value) => value + "%",
        },
        title: {
          display: true,
          text: 'Percentage', // Y-axis label
        },
      },
      y: {
        title: {
          display: true,
          text: 'Rating out of 10', // Y-axis label
        },
      },
    },

  };

  return (
    <div className="media-statistics">
      <span>Ratings</span>
      <hr className="custom-hr" />
        <div className="chart-container d-flex justify-content-center">
          <Bar className="bar" data={chartData} options={options} />
        </div>
    </div>
  );
};

export default MediaStatistics;
