import React, { useState } from "react";
import styled, { css } from "styled-components";
import { menuData } from "../Data/NavMenu";
import { Link } from "react-router-dom";
import PopUp from "./PopUp";
import Login from "./Login";
import { FaBars } from "react-icons/fa";
import logo from "../Svg/logo.png";

const Nav = styled.div`
	margin: 0;
	height: 80px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1.2rem 1rem;
	z-index: 100;
	position: fixed;
	width: 100%;
	background: "#5f0a87";
	margin-bottom: 20px;
	transition: 200ms ease-in;

	&:active {
		background: "#6C63FF";
	}
`;
const NavLink = css`
	color: #f5f5f5;
	display: inline-block;
	padding: 5px;
	margin: 5px 15px;
	position: relative;
	justify-content: center;
	align-items: center;
	height: 100%;
	cursor: pointer;
	text-decoration: none;
`;
const NavBars = styled(FaBars)`
	display: none;
	cursor: pointer;
	font-size: 24px;
	margin-right: 10px;

	@media screen and (max-width: 992px) {
		display: block;
		color: #f5f5f5;
	}
`;

const Banner = styled(Link)`
	padding: 15px 20px 15px 40px;
	color: #f5f5f5;
	cursor: pointer;
	text-decoration: none;
	display: flex;
	justify: content: center;
	align-items: center;

	img {
		width: 3rem;
		margin-right: 10px;
	}

	h1 {
		font-size: 1.75rem;
		font-weight: 600;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		p {
			font-size: 0.75rem;
			font-weight: 500;
		}
	}

	@media screen and (max-width: 992px) {
		padding-left: 0px;
	}
`;

const NavMenu = styled.div`
	display: flex;
	@media screen and (max-width: 992px) {
		display: none;
	}
`;

const NavMenuLinks = styled(Link)`
	${NavLink}
	font-size:1.2rem;
	&:after {
		background: none repeat scroll 0 0 transparent;
		bottom: 0px;
		content: "";
		display: block;
		height: 2px;
		left: 50%;
		position: absolute;
		background: #ff63d8;
		transition: width 0.3s ease 0s, left 0.3s ease 0s;
		width: 0;
	}
	&:hover {
		transform: scale(1.05);
		transition: width 0.3s ease 0s;
		text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.9);
	}

	&:hover:after {
		width: 100%;
		left: 0;
	}
	&:active {
		transform: scale(0.95);
	}
`;

const Navbar = ({ toggle }) => {
	const [navbar, setNavbar] = useState("transparent");

	const ChangeBackground = () => {
		if (window.scrollY >= 128) {
			setNavbar("#5f0a87");
		} else {
			setNavbar("transparent");
		}
	};

	window.addEventListener("scroll", ChangeBackground);

	const [openPopup, setOpenPopup] = useState(false);

	return (
		<Nav style={{ background: `${navbar}` }}>
			<Banner to="/">
				<img src={logo} alt="logo" />
				<h1>
					FreePostSeo
					<p>Empowering College Students</p>
				</h1>
			</Banner>
			<NavBars onClick={toggle} />
			<NavMenu>
				{menuData.map((item, index) => (
					<NavMenuLinks to={item.link} key={index}>
						{item.title}
					</NavMenuLinks>
				))}
				{/*
		<NavMenuLinks onClick={() => setOpenPopup(true)}>
		Login / Register
		</NavMenuLinks>
		 */}
			</NavMenu>
			<PopUp openPopup={openPopup} setOpenPopup={setOpenPopup}>
				<Login />
			</PopUp>
		</Nav>
	);
};

export default Navbar;
