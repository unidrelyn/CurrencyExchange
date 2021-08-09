import React, { useState, useEffect } from "react";
import "./History.css";

import DataHistory from "../dataHistory/DataHistory";

function History({ fromCurrency, resultConvert }) {
	const [newDate, setNewDate] = useState(new Date());
	const [data, setData] = useState([]);

	useEffect(() => {
		const date2 = new Date().toISOString();
		const date1 = newDate.toISOString();
		const URL = `https://api.nomics.com/v1/exchange-rates/history?key=780d4471271e836173374a79eff017ba9e616298&currency=${fromCurrency}&start=${date1}&end=${date2}`;
		fetch(URL)
			.then((res) => res.json())
			.then((data) => {
				setData(data);
			});
	}, [resultConvert, newDate]);

	function historyDate(e) {
		const endDate = new Date();
		switch (e) {
			case "7":
				endDate.setDate(endDate.getDate() - 7);
				setNewDate(endDate);

				break;
			case "14":
				endDate.setDate(endDate.getDate() - 14);
				setNewDate(endDate);

				break;
			case "30":
				endDate.setDate(endDate.getDate() - 30);
				setNewDate(endDate);

				break;

			default:
				break;
		}
	}
	const option = [
		{ value: "7", label: 7 },
		{ value: "14", label: 14 },
		{ value: "30", label: 30 },
	];

	return (
		<div className="containerHistory">
			<h2 className="titleHistory">Exchange History</h2>
			<div className="styleInput">
				<label className="labelConvert labelHistory">Duration</label>
				<select
					className="inputConvert labelHistory"
					onChange={(e) => historyDate(e.target.value)}
				>
					<option value="7">7 Days</option>
					<option value="14">14 Days</option>
					<option value="30">30 Days</option>
				</select>
			</div>
			<div>
				<h2>Date ExchangeDate</h2>
				{data.map((item) => (
					<DataHistory item={item} key={item.timestamp} />
				))}
			</div>
		</div>
	);
}

export default History;
