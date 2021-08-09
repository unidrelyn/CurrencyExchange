import React, { useEffect, useState } from "react";

import "./App.css";

import ConvertForm from "./components/ConvertForm/ConvertForm";
import Header from "./components/header/Header";
import Result from "./components/result/Result";
import History from "./components/history/History";

const BASE_URL =
	"https://api.nomics.com/v1/exchange-rates?key=780d4471271e836173374a79eff017ba9e616298";

function App() {
	const [currencyOptions, setCurrencyOptions] = useState([]);
	const [fromCurrency, setFromCurrency] = useState();
	const [toCurrency, setToCurrency] = useState("USD");
	const [amount, setAmount] = useState(1);
	const [baseFrom, setBaseFrom] = useState(1);
	const [baseTo, setBaseTo] = useState();
	const [resultConvert, setResultConvert] = useState(null);

	useEffect(() => {
		fetch(BASE_URL)
			.then((res) => res.json())
			.then((data) => {
				setCurrencyOptions(data);
				setFromCurrency(data[0].currency);
				setBaseTo(data[0].rate);
			});
	}, []);

	function convertDivisa(e) {
		e.preventDefault();

		const optionFrom = currencyOptions.filter(
			(base) => base.currency === fromCurrency
		);
		const optionTo = currencyOptions.filter(
			(base) => base.currency === toCurrency
		);
		setBaseFrom(optionFrom[0].rate);
		setBaseTo(optionTo[0].rate);

		setResultConvert((amount * baseFrom) / baseTo);
	}

	return (
		<div className="App">
			<Header />
			<ConvertForm
				currencyOptions={currencyOptions}
				toCurrency={toCurrency}
				fromCurrency={fromCurrency}
				setFromCurrency={setFromCurrency}
				setToCurrency={setToCurrency}
				amount={amount}
				convertDivisa={convertDivisa}
				setAmount={setAmount}
			/>
			{resultConvert !== null ? (
				<Result
					amount={amount}
					fromCurrency={fromCurrency}
					toCurrency={toCurrency}
					baseFrom={baseFrom}
					baseTo={baseTo}
					resultConvert={resultConvert}
				/>
			) : (
				""
			)}
			{resultConvert !== null ? (
				<History fromCurrency={fromCurrency} resultConvert={resultConvert} />
			) : (
				""
			)}
		</div>
	);
}

export default App;
