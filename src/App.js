import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Dropdown from "./Components/Dropdown";
import Navbar from "./Components/Navbar";
import ScrollToTop from "./Components/ScrollToTop";
import Home from "./Pages/Home";

function App() {

	const [isOpen, setIsOpen] = useState(false);

	const toggle = (e) => {
		setIsOpen(!isOpen);
	};

	return (
		<Router>
		<ScrollToTop/>
		<Navbar toggle={toggle} id="navbar"/>
		<Dropdown isOpen={isOpen} toggle={toggle} id="drop"/>
			<Switch>
				<Route path="/" exact component={Home} />
			</Switch>
		</Router>
	);
}

export default App;
