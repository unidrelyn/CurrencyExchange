import React, { useEffect, useState } from "react";

import ConvertForm from "../../ConvertForm/ConvertForm";
import Result from "../../result/Result";
import History from "../../history/History";
import { saveHistoryLocalStorage } from "../../../LS/LS";

const BASE_URL =
	"https://api.nomics.com/v1/exchange-rates?key=780d4471271e836173374a79eff017ba9e616298";

function Home(props) {
	const [currencyOptions, setCurrencyOptions] = useState([]);
	const [fromCurrency, setFromCurrency] = useState();
	const [toCurrency, setToCurrency] = useState("USD");
	const [amount, setAmount] = useState(1);
	const [baseFrom, setBaseFrom] = useState();
	const [baseTo, setBaseTo] = useState();
	const [resultConvert, setResultConvert] = useState(null);

	useEffect(() => {
		if (props.location.state) {
			const { amount, fromCurrency, toCurrency } = props.location.state;

			fetch(BASE_URL)
				.then((res) => res.json())
				.then((data) => {
					setCurrencyOptions(data);
					setFromCurrency(fromCurrency);
					setAmount(amount);
					setToCurrency(toCurrency);
					const baseFromnew = data.filter(
						(item) => item.currency === fromCurrency
					);
					setBaseFrom(baseFromnew.rate);
					const baseToNew = data.filter((item) => item.currency === toCurrency);
					setBaseTo(baseToNew);
				});
		}

		fetch(BASE_URL)
			.then((res) => res.json())
			.then((data) => {
				setCurrencyOptions(data);
				setFromCurrency(data[51].currency);
				setBaseFrom(data[51].rate);
				setToCurrency(data[157].currency);
				setBaseTo(data[157].rate);
			});
	}, []);

	function convertDivisa(e) {
		e.preventDefault();
		setResultConvert((amount * baseFrom) / baseTo);
		const timeConver = new Date().toLocaleString();

		const infoHistory = {
			id: Date.now(),
			amount,
			fromCurrency,
			toCurrency,
			timeConver,
		};

		saveHistoryLocalStorage(infoHistory);
	}

	return (
		<div>
			<ConvertForm
				currencyOptions={currencyOptions}
				toCurrency={toCurrency}
				fromCurrency={fromCurrency}
				setFromCurrency={setFromCurrency}
				setToCurrency={setToCurrency}
				amount={amount}
				convertDivisa={convertDivisa}
				setAmount={setAmount}
				setResultConvert={setResultConvert}
				setBaseTo={setBaseTo}
				setBaseFrom={setBaseFrom}
				baseFrom={baseFrom}
				baseTo={baseTo}
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

export default Home;
