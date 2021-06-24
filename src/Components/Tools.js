import { Button, TextField } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import USSvg from "../Svg/undraw_link_shortener_mvf6.svg";
import WsSvg from "../Svg/undraw_heatmap_uyye.svg";
import YTSvg from "../Svg/undraw_Download_re_li50.svg";

const Section = styled.div`
	width: 100%;
	height: 100%;
	padding: 4rem 1rem;
	scroll-snap-align: start;
`;
const Container = styled.div`
	scroll-snap-type: y mandatory;
	height: 100%;
	background: #ffffff;
	padding: 3rem calc((100vw - 1300px) / 2);
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 500px;
	@media screen and (max-width: 768px) {
		grid-template-columns: 1fr;
	}
`;
const ColumnLeft = styled.div`
	padding-left: 80px;
	background: #fff;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	line-height: 1.4;
	padding: 1rem 2rem;
	order: ${({ reverse }) => (reverse ? "2" : "1")};

	h1 {
		margin-bottom: 1rem;
		font-size: clamp(1.5rem, 6vw, 2rem);
	}
	p {
		margin-bottom: 2rem;
	}
`;

const ColumnRight = styled.div`
	background: #fff;
	padding: 1rem 2rem;
	order: ${({ reverse }) => (reverse ? "1" : "2")};
	display: flex;
	justify-content: center;
	align-items: center;

	@media screen and (max-width: 768px) {
		order: ${({ reverse }) => (reverse ? "2" : "1")};
	}

	img {
		max-height: 100%;
		object-fit: cover;

		@media screen and (max-width: 768px) {
			width: 100%;
			height: 100%;
		}
	}
`;

function Tools() {
	return (
		<Section>
			<Container>
				<ColumnLeft>
					<h1>URL Shortener</h1>
					<p>Use it to Reduce it 😉</p>
					<TextField
						id="standard-required"
						type="url"
						label="Enter your URL"
						color="#F5F5F5"
						style={{ paddingBottom: "15px" }}
					/>
					<Button
						variant="contained"
						color="primary"
						style={{ paddingInline: "10px" }}
					>
						Shorten it 🚀
					</Button>
				</ColumnLeft>
				<ColumnRight>
					<img src={USSvg} alt="" style={{ width: "95%" }} />
				</ColumnRight>
			</Container>
			<Container style={{ background: "transparent" }}>
				<ColumnLeft reverse="false">
					<h1>Web Scrapper 🔎</h1>
					<p>Get the Glimpse of the Webpage</p>
					<TextField
						id="standard-required"
						type="url"
						label="Enter your URL"
						color="#F5F5F5"
						style={{ paddingBottom: "15px" }}
					/>
					<Button
						variant="contained"
						color="primary"
						style={{ paddingInline: "10px" }}
					>
						Get it ✔
					</Button>
				</ColumnLeft>
				<ColumnRight reverse="false">
					<img src={WsSvg} alt="" style={{ width: "95%" }} />
				</ColumnRight>
			</Container>
			<Container>
				<ColumnLeft>
					<h1>Youtube Song Downloader</h1>
					<p>Get the Trending Songs 🕺💃</p>
					<TextField
						id="standard-required"
						type="url"
						label="Enter your URL"
						color="#F5F5F5"
						style={{ paddingBottom: "15px" }}
					/>
					<Button
						variant="contained"
						color="primary"
						style={{ paddingInline: "10px" }}
					>
						Download it 🎵
					</Button>
				</ColumnLeft>
				<ColumnRight>
					<img src={YTSvg} alt="" style={{ width: "95%" }} />
				</ColumnRight>
			</Container>
		</Section>
	);
}

export default Tools;
