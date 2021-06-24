import React, { useState } from "react";
import styled, { css } from "styled-components";
import { menuData } from "../Data/NavMenu";
import { Link } from "react-router-dom";
import PopUp from "./PopUp";
import Login from "./Login";
import { FaBars } from "react-icons/fa";

const Nav = styled.div`
	margin: 0;
	height: 80px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem 1rem;
	z-index: 100;
	position: fixed;
	width: 100%;
	background: "transparent";
	margin-bottom: 20px;
	transition: 200ms ease-in;

	&:active {
		background: "#6C63FF";
	}
`;
const NavLink = css`
	color: black;
	display: inline-block;
	padding: 5px 20px;
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
		color: black;
	}
`;
const Logo = styled(Link)`
	padding: 5px 20px;
	padding-left: 80px;
	color: black;
	font-style: italic;
	font-size: 1.4rem;
	font-weight: 600;
	text-decoration: none;
	@media screen and (max-width: 992px) {
		padding-left: 10px;
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
	const [color, setColor] = useState("#000");

	const ChangeBackground = () => {
		if (window.scrollY >= 128) {
			setNavbar("#6C63FF");
			setColor("#F5F5F5");
		} else {
			setNavbar("transparent");
			setColor("#000");
		}
	};

	window.addEventListener("scroll", ChangeBackground);

	const [openPopup, setOpenPopup] = useState(false);

	return (
		<Nav style={{ background: `${navbar}` }}>
			<Logo to="/" style={{ color: `${color}` }}>
				Free Post SEO
			</Logo>
			<NavBars onClick={toggle} style={{ color: `${color}` }} />
			<NavMenu>
				{menuData.map((item, index) => (
					<NavMenuLinks
						to={item.link}
						key={index}
						style={{ color: `${color}` }}
					>
						{item.title}
					</NavMenuLinks>
				))}
				<NavMenuLinks
					onClick={() => setOpenPopup(true)}
					style={{ color: `${color}` }}
				>
					Login / Register
				</NavMenuLinks>
			</NavMenu>
			<PopUp openPopup={openPopup} setOpenPopup={setOpenPopup}>
				<Login />
			</PopUp>
		</Nav>
	);
};

export default Navbar;
