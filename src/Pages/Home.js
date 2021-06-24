import React from "react";
import GlobalStyle from "../globalStyles";
import Footer from "../Components/Footer";
import Tools from "../Components/Tools";
import Landing from "../Components/Landing";



const Home = () => {

	return (
		<>
			<GlobalStyle />


			<Landing id="landing"/>
			<Tools id="tools"/>
			<Footer id="contact"/>
		</>
	);
};

export default Home;
