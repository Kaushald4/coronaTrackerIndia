import React from "react";
import { Line } from "react-chartjs-2";

export default function CustomGrapg(props) {
  const { report } = props;
  const data = {
    labels: report === null ? [] : report.data.regional.map(e => e.loc),
    datasets: [
      {
        label: "Infected",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(52,20,51,.4)",
        borderColor: "rgb(52,20,51)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgb(52,20,51)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 2,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgb(52,20,51)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 3,
        pointHitRadius: 10,
        data:
          report === null
            ? []
            : report.data.regional
                .filter(e => e.confirmedCasesIndian !== 0)
                .sort((a, b) => b.confirmedCasesIndian - a.confirmedCasesIndian)
                .map(e => e.confirmedCasesIndian)
      },
      {
        label: "cured",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgb(5,160,129,.4)",
        borderColor: "rgba(5,160,129, 1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgb(5,160,129)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 3,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgb(5,160,129)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 3,
        pointHitRadius: 10,
        data: report === null ? [] : report.data.regional.map(e => e.discharged)
      }
    ]
  };
  return (
    <div className="mychart">
      <p
        style={{
          marginBottom: "2.8rem",
          paddingTop: "2rem",
          fontSize: "3.7rem"
        }}
      >
        State Wise Analytics
      </p>
      <Line
        data={data}
        options={{
          scales: {
            xAxes: [{ ticks: { display: false } }],
            yAxes: [
              {
                scaleLabel: {
                  display: true,
                  fontFamily: "Poppins",
                  fontStyle: "bold",
                  labelString: "No Of People."
                }
              }
            ]
          },
          responsive: true,
          tooltips: {
            mode: "label"
          },
          maintainAspectRatio: true,
          layout: { padding: { bottom: 20, right: 20 } }
        }}
      />
    </div>
  );
}
