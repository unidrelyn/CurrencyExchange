import React from "react";
import "./Header.css";

function Header() {
	return (
		<header className="containerHeader">
			<img src="../../assets/logo.png" alt="logo" />
			<a className="selectHeader" href="#">
				Currency Converter
			</a>
			<a className="selectHeader" href="#">
				View Conversion History
			</a>
			<a className="selectHeader" href="#">
				Log Out
			</a>
		</header>
	);
}

export default Header;
