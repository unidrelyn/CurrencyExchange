import React from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";

function Header() {
	return (
		<header className="containerHeader">
			<img src="../../assets/logo.png" alt="logo" />
			<nav className="navHeader">
				<NavLink activeClassName="is-active" to="/" className="selectHeader">
					Currency Converter
				</NavLink>

				<NavLink
					activeClassName="is-active"
					to="/view"
					className="selectHeader"
				>
					View Conversion History
				</NavLink>

				<a className="selectHeader" href="#">
					Log Out
				</a>
			</nav>
		</header>
	);
}

export default Header;
