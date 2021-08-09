import React from "react";

function DataHistory({ item }) {
	const { timestamp, rate } = item;
	const newDate = new Date(timestamp).toLocaleDateString();

	return (
		<div>
			{newDate} {rate}
		</div>
	);
}

export default DataHistory;
