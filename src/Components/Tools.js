import { Button, FormControl, TextField } from "@material-ui/core";
import React, { useState } from "react";
import styled from "styled-components";
import USSvgGo from "../Svg/Go.svg";
import USSvg from "../Svg/undraw_link_shortener_mvf6.svg";
import WsSvg from "../Svg/undraw_heatmap_uyye.svg";
import YTSvg from "../Svg/undraw_Download_re_li50.svg";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	root: {
		"& > *": {
			margin: theme.spacing(1),
		},
	},
}));

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
		text-align: center;
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
		height: 100%;
		width: 100%;
		object-fit: fit;
	}
`;

const Bottom = styled.div`
	display: flex;
	padding-top: 15px;
	justify-content: space-between;
`;

function Tools() {
	const classes = useStyles();

	const [shortenerButtons, setShortenerButtons] = useState(false);
	const [scrapperButtons, setscrapperButtons] = useState(false);
	const [isCopied, setCopy] = useState("Copy Link");

	const shortener = async (e) => {
		e.preventDefault();

		const input = e.target.querySelector("input[name=url]");

		const body = [...e.target.querySelectorAll("input")]
			.map(
				(e) => `${encodeURIComponent(e.name)}=${encodeURIComponent(e.value)}`
			)
			.join("&");

		try {
			console.log("fetching");

			const response = await fetch(
				"https://fpseo.herokuapp.com/tools/shorturl",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/x-www-form-urlencoded",
					},
					body: body,
				}
			);

			const { error, urlid } = await response.json();

			if (error) throw error;

			input.value = `${window.location.host}/url/${urlid}`;
			input.setAttribute("readonly", "true");

			setShortenerButtons(true);
		} catch (error) {
			alert(error.message);
		}
	};

	const scrapurl = async (e) => {
		e.preventDefault();

		const body = [...e.target.querySelectorAll("input")]
			.map(
				(e) => `${encodeURIComponent(e.name)}=${encodeURIComponent(e.value)}`
			)
			.join("&");

		try {
			console.log("fetching");

			const response = await fetch(
				"https://fpseo.herokuapp.com/tools/scrapper",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/x-www-form-urlencoded",
					},
					body: body,
				}
			);

			const data = await response.json();

			setscrapperButtons(true);
			console.log(data);
		} catch (error) {
			console.error(error);
		}
	};

	const download = async (e) => {
		e.preventDefault();

		const input = e.target.querySelector("input[name=url]");
		const button = e.target.querySelector("button[type=submit]");

		const body = [...new FormData(e.target).entries()]
			.map((e) => `${encodeURIComponent(e[0])}=${encodeURIComponent(e[1])}`)
			.join("&");

		try {
			input.setAttribute("disabled", "true");
			button.setAttribute("disabled", "true");

			button.innerText = "Downloading";

			const response = await fetch(
				"https://fpseo.herokuapp.com/tools/youtubemp3",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/x-www-form-urlencoded",
					},
					body: body,
				}
			);

			const headers = Object.fromEntries(response.headers.entries());
			if (!headers["filename"]) throw await response.json();

			const blob = await response.blob();

			const audio = document.createElement("a");

			audio.style.display = "none";
			audio.download = headers["filename"];
			audio.href = URL.createObjectURL(blob);

			audio.click();
			audio.remove();

			button.innerText = "Downloaded";
		} catch (error) {
			button.innerText = "Download Failed";
		} finally {
			input.removeAttribute("disabled");
			button.removeAttribute("disabled");
			setTimeout(() => (button.innerText = "Download it 🎵"), 1500);
		}
	};

	const copy = () => {
		const url = document.querySelector("input[name=url]");
		url.select();
		document.execCommand("copy");
		setCopy("Copied");
		setTimeout(() => setCopy("Copy Link"), 2000);
	};

	const redirect = () => {
		const url = document.querySelector("input[name=url]").value;
		window.open(`${url.startsWith("http") ? "" : "http://"}${url}`);
	};

	return (
		<Section>
			<Container>
				<ColumnLeft>
					<h1>URL Shortener</h1>
					<p>Use it to Reduce it 😉</p>
					<form onSubmit={shortener}>
						<FormControl>
							<TextField
								id="shorturl"
								name="url"
								type="url"
								required={true}
								label="Enter your URL"
								style={{ paddingBottom: "15px" }}
							/>
							{!shortenerButtons && (
								<Button
									type="submit"
									variant="contained"
									color="primary"
									style={{ paddingInline: "10px" }}
								>
									Shorten it 🚀
								</Button>
							)}
							{shortenerButtons && (
								<>
									<Bottom>
										<div className={classes.root}>
											<Button
												variant="contained"
												color="primary"
												style={{ paddingInline: "10px" }}
												onClick={redirect}
											>
												Redirect ↗
											</Button>
											<Button
												variant="contained"
												color="primary"
												style={{ paddingInline: "10px" }}
												onClick={copy}
											>
												{isCopied} 🔗
											</Button>
										</div>
									</Bottom>
									<Button
										color="primary"
										style={{ padding: "10px" }}
										onClick={(e) => {
											const input = e.nativeEvent.path
												.filter((e) => e.tagName === "FORM")[0]
												.querySelector("input[name=url]");

											input.value = "";
											input.removeAttribute("readonly");
											input.focus();

											setShortenerButtons(false);
										}}
									>
										reset
									</Button>
								</>
							)}
						</FormControl>
					</form>
				</ColumnLeft>
				<ColumnRight>
					{!shortenerButtons && <img src={USSvg} alt="" />}
					{shortenerButtons && <img src={USSvgGo} alt="" />}
				</ColumnRight>
			</Container>
			<Container style={{ background: "transparent" }}>
				{!scrapperButtons && (
					<>
						<ColumnLeft reverse="false">
							<h1>Bookmarker 🔎</h1>
							<p>Get the Glimpse of the Webpage</p>
							<form onSubmit={scrapurl}>
								<FormControl>
									<TextField
										id="scrapurl"
										name="url"
										type="url"
										required={true}
										label="Enter your URL"
										style={{ paddingBottom: "15px" }}
									/>
									<Button
										type="submit"
										variant="contained"
										color="primary"
										style={{ paddingInline: "10px" }}
									>
										Mark it ✔
									</Button>
								</FormControl>
							</form>
						</ColumnLeft>
						<ColumnRight reverse="false">
							<img src={WsSvg} alt="" />
						</ColumnRight>
					</>
				)}
				{scrapperButtons && (
					<>
						<ColumnLeft reverse="false">
							<h1>Title of the Page</h1>
							<p>Description</p>
							<p>url</p>
							<Bottom>
								<div className={classes.root}>
									<Button color="primary" variant="contained">
										Go to URL
									</Button>
									<Button
										color="primary"
										variant="contained"
										onClick={() => setscrapperButtons(false)}
									>
										RESET
									</Button>
								</div>
							</Bottom>
						</ColumnLeft>
						<ColumnRight reverse="false">
							<p>Image got from the WebPage</p>
						</ColumnRight>
					</>
				)}
			</Container>
			<Container>
				<ColumnLeft>
					<h1>Youtube Song Downloader</h1>
					<p>Get the Trending Songs 🕺💃</p>
					<form onSubmit={download}>
						<FormControl>
							<TextField
								id="yturl"
								name="url"
								type="url"
								required={true}
								label="Enter your URL"
								style={{ paddingBottom: "15px" }}
							/>
							<Button
								type="submit"
								variant="contained"
								color="primary"
								style={{ paddingInline: "10px" }}
							>
								Download it 🎵
							</Button>
						</FormControl>
					</form>
				</ColumnLeft>
				<ColumnRight>
					<img src={YTSvg} alt="" />
				</ColumnRight>
			</Container>
		</Section>
	);
}

export default Tools;
