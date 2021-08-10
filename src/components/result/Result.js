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
	const change1 = baseFrom / baseTo;
	const change2 = baseTo / baseFrom;
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
			<p>
				1 {fromCurrency} = {change1} {toCurrency}
			</p>
			<p>
				1 {toCurrency} = {change2} {fromCurrency}
			</p>
		</div>
	);
}

export default Result;
