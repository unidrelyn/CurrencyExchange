import React from "react";
import "./convertForm.css";

function ConvertForm({
	currencyOptions,
	toCurrency,
	fromCurrency,
	setFromCurrency,
	setToCurrency,
	amount,
	setAmount,
	convertDivisa,
	setResultConvert,
	setBaseFrom,
	setBaseTo,
	baseFrom,
	baseTo,
}) {
	function changeCurrency(e) {
		e.preventDefault();
		setResultConvert(null);
		const firstCurrency = fromCurrency;
		const firstBase = baseFrom;
		setFromCurrency(toCurrency);
		setToCurrency(firstCurrency);
		setBaseFrom(baseTo);
		setBaseTo(firstBase);
	}
	return (
		<div className="container">
			<h1 className="titleConvert">I want to convert</h1>

			<form className="formConvert">
				<div className="styleInput">
					<label className="labelConvert">Amount</label>
					<input
						className="inputConvert"
						type="number"
						value={amount}
						onChange={(e) => setAmount(e.target.value)}
					/>
				</div>
				<div className="styleInput">
					<label className="labelConvert">From</label>
					<select
						className="inputConvert"
						value={fromCurrency}
						onBlur={() => {
							const optionFrom = currencyOptions.filter(
								(base) => base.currency === fromCurrency
							);
							setBaseFrom(optionFrom[0].rate);
						}}
						onChange={(e) => {
							setFromCurrency(e.target.value);
						}}
					>
						{currencyOptions.map((opt) => (
							<option key={opt.currency} value={opt.currency}>
								{opt.currency}
							</option>
						))}
					</select>
				</div>
				<button className="arrow" onClick={(e) => changeCurrency(e)}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						width="18px"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
						/>
					</svg>
				</button>
				<div className="styleInput">
					<label className="labelConvert">To</label>
					<select
						className="inputConvert"
						value={toCurrency}
						onBlur={() => {
							const optionTo = currencyOptions.filter(
								(base) => base.currency === toCurrency
							);
							setBaseTo(optionTo[0].rate);
						}}
						onChange={(e) => setToCurrency(e.target.value)}
					>
						{currencyOptions.map((opt) => (
							<option key={opt.currency} value={opt.currency}>
								{opt.currency}
							</option>
						))}
					</select>
				</div>
				<input
					className="buttonConvert"
					type="submit"
					value="CONVERT"
					onClick={convertDivisa}
				/>
			</form>
		</div>
	);
}

export default ConvertForm;
