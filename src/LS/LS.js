export function takeHistoryLocalStorage() {
	let historyLS;

	if (localStorage.getItem("history") === null) {
		historyLS = [];
	} else {
		historyLS = JSON.parse(localStorage.getItem("history"));
	}
	return historyLS;
}

export function saveHistoryLocalStorage(conver) {
	let historys = takeHistoryLocalStorage();

	historys.push(conver);

	localStorage.setItem("history", JSON.stringify(historys));
}

export function deleteHistory(historyId) {
	let historyLs = takeHistoryLocalStorage();

	historyLs.forEach((item, index) => {
		if (item.id === historyId) {
			historyLs.splice(index, 1);
		}
	});

	localStorage.setItem("history", JSON.stringify(historyLs));
}
