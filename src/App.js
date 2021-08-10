import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

import Header from "./components/header/Header";
import Home from "./components/Screens/Home/Home";
import View from "./components/Screens/View/View";

function App() {
	return (
		<Router>
			<div className="App">
				<Header />
				<Route exact path="/" component={Home} />
				<Route exact path="/view" component={View} />
			</div>
		</Router>
	);
}

export default App;
