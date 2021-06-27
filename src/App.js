import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Circle } from "better-react-spinkit";

import "./App.css";
import ScrollToTop from "./Components/ScrollToTop";
import Home from "./Pages/Home";
import styled from "styled-components";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Redirect = ({ match }) => {
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					`https://fpseo.herokuapp.com/tools/shorturl/${match.params.id}`
				);

				const { error, url } = await response.json();

				if (!error)
					window.location.replace(
						`${url.startsWith("http") ? "" : "http://"}${url}`
					);
				else throw error;
			} catch (error) {
				window.location.replace("/404");
			}
		};

		fetchData();
	}, [match]);

	return (
		<center style={{ display: "grid", placeitems: "center", height: "100vh" }}>
			<Container>
				<h1>Redirecting</h1>
				<Circle color="#191f18" size={80} />
			</Container>
		</center>
	);
};

const NotFound = () => {
	return (
		<center>
			<Container>
				<h1>404 Not Found</h1>
			</Container>
		</center>
	);
};

function App() {
	return (
		<Router>
			<ScrollToTop />

			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/url/:id" exact component={Redirect}></Route>
				<Route path="*" component={NotFound}></Route>
			</Switch>
		</Router>
	);
}

export default App;
