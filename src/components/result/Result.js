import React from "react";
import "./Result.css";

function Result({
	amount,
	toCurrency,
	fromCurrency,
	baseFrom,
	baseTo,
	resultConvert,
}) {
	return (
		<div className="containerResult">
			<p>
				<span className="firstValue">
					{amount} {fromCurrency} =
				</span>

				<span className="secondValue">
					{resultConvert} {toCurrency}
				</span>
			</p>
		</div>
	);
}

export default Result;
