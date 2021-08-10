import React, { useState, useEffect } from "react";
import { takeHistoryLocalStorage, deleteHistory } from "../../../LS/LS";
import { Link } from "react-router-dom";
import Home from "../Home/Home";

import "./View.css";

function View() {
	const [historyLS, setHistoryLS] = useState([]);
	const [change, setChange] = useState(true);

	useEffect(() => {
		let allHistory = takeHistoryLocalStorage();
		setHistoryLS(allHistory);
		setChange(true);
	}, [change]);

	function viewChange(amount, fromCurrency, toCurrency) {}

	return (
		<div className="containerConversion">
			<h1 className="titleConversion">Conversion History</h1>
			<table className="tableHistory tableConvert">
				<tr className="lineTable">
					<th>Date</th>
					<th>Event</th>
					<th>Actions</th>
				</tr>
				{historyLS !== []
					? historyLS.map(
							({ amount, fromCurrency, id, timeConver, toCurrency }) => (
								<tr id={id} className="lineTable">
									<td>{timeConver} </td>
									<td>
										Converted an amount of {amount} from {fromCurrency} to{" "}
										{toCurrency}
									</td>
									<td>
										<Link
											className="viewLink"
											to={{
												pathname: "/",
												state: { amount, fromCurrency, toCurrency },
											}}
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="h-6 w-6 view"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
												width="20px"
												onClick={() => <Home amount={amount} />}
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
												/>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
												/>
											</svg>
											<span className="view"> View </span>
										</Link>
										<div className="deleteLink">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="h-6 w-6 delete"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
												width="20px"
												onClick={() => {
													deleteHistory(id);
													setChange(false);
												}}
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
												/>
											</svg>{" "}
											<span className="delete">Delete</span>
										</div>
									</td>
								</tr>
							)
					  )
					: ""}
			</table>
		</div>
	);
}

export default View;
