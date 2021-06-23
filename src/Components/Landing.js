import React from "react";
import styled from "styled-components";
import svg from "../Svg/Dragon-Scales.svg";

const Section = styled.div``;
const Container = styled.div``;
const Content = styled.div``;
const Bottom = styled.div``;

function Landing() {
	return (
		<Section>
			<Container>
				<img src={svg} alt="" />
				<Content></Content>
				<Bottom></Bottom>
			</Container>
		</Section>
	);
}

export default Landing;
