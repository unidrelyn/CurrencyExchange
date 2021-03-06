import React from "react";

function DataHistory({ item }) {
	const { timestamp, rate } = item;
	const newDate = new Date(timestamp).toLocaleDateString();

	return (
		<tr className="lineTable">
			<td>{newDate} </td>
			<td>{rate}</td>
		</tr>
	);
}

export default DataHistory;
