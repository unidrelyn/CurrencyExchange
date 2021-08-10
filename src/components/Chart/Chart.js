import React from "react";

import { Line } from "react-chartjs-2";

function Chart({ data }) {
	const labelInfo = data.map((item) => item.timestamp);
	const ratesInfo = data.map((item) => item.rate);

	const info = {
		labels: labelInfo,
		datasets: [
			{
				label: "Rates",
				data: ratesInfo,
				fill: true,
				backgroundColor: "#17E53D",
				borderColor: "#407E4B",
				borderWidth: 1,
			},
		],
	};

	const options = {
		scales: {
			yAxes: [
				{
					ticks: {
						beginAtZero: true,
					},
				},
			],
		},
		maintainAspectRatio: false,
	};
	return (
		<div>
			<Line data={info} options={options} />
		</div>
	);
}

export default Chart;
