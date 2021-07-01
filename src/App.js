import { useEffect } from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import { Circle } from "better-react-spinkit";

import "./App.css";
import ScrollToTop from "./Components/ScrollToTop";
import Home from "./Pages/Home";
import styled from "styled-components";
import SVG404 from "../src/Svg/undraw_page_not_found_su7k.svg";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Centered = styled.div`
	height: 100vh;
	width: 100%;
	display: grid;
	place-items: center;

	& img {
		width: 50%;
		animation: beat 2s infinite;
	}

	@keyframes beat {
		0% {
			transform: scale(1);
		}
		40% {
			transform: scale(0.95);
		}
		50% {
			transform: scale(1.1);
		}
		60% {
			transform: scale(0.95);
		}
		100% {
			transform: scale(1);
		}
	}
`;

const GetURL = ({ match }) => {
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
		<center style={{ display: "grid", placeItems: "center", height: "100vh" }}>
			<Container>
				<h1>Redirecting</h1>
				<Circle color="#6c63ff" size={80} />
			</Container>
		</center>
	);
};

const Error404 = () => {
	return (
		<Centered>
			<img src={SVG404} alt="404 Not Found" />
		</Centered>
	);
};

function App() {
	return (
		<Router>
			<ScrollToTop />

			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/url/:id" exact component={GetURL} />
				<Route path="/404" exact component={Error404} />
				<Route path="*" component={() => <Redirect to="/404" />} />
			</Switch>
		</Router>
	);
}

export default App;
