import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import PopUp from "./PopUp";
import Login from "./Login";
import { FaBars } from "react-icons/fa";
import logo from "../Svg/logo.png";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Drop from "./Drop";
import Error from "./Error";

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

const Banner = styled(LinkR)`
  padding: 15px 20px 15px 40px;
  color: #f5f5f5;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  justify-content: center;
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
      position: relative;
      top: -5px;
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

const NavMenuLinks = styled(LinkS)`
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
  const [openMenu, setOpenMenu] = useState(false);

  const ChangeBackground = () => {
    if (window.scrollY >= 128) {
      setNavbar("#5f0a87");
    } else {
      setNavbar("transparent");
    }
  };

  window.addEventListener("scroll", ChangeBackground);

  const [openLogPopup, setOpenLogPopup] = useState(false);
  const [openError, setOpenError] = useState(false);

  const handleClose = () => {
    setOpenError(false);
    setOpenMenu(false);
  };
  return (
    <ClickAwayListener onClickAway={handleClose}>
      <Nav style={{ background: `${navbar}` }}>
        <Banner to="/" smooth={true} duration={1000}>
          <img src={logo} alt="logo" />
          <h1>
            FreePostSeo
            <p>Empowering College Students</p>
          </h1>
        </Banner>
        <NavBars onClick={toggle} />
        <NavMenu>
          <NavMenuLinks to="home" smooth={true} duration={1000}>
            Home
          </NavMenuLinks>
          <NavMenuLinks
            smooth={true}
            duration={1000}
            onClick={() => setOpenMenu((prev) => !prev)}
          >
            Tools
          </NavMenuLinks>

          <NavMenuLinks to="footer" smooth={true} duration={1000}>
            Contact Us
          </NavMenuLinks>
          <NavMenuLinks onClick={() => setOpenError(true)}>Error</NavMenuLinks>
          {openMenu && <Drop background={navbar} toggler={setOpenMenu} />}

          <NavMenuLinks onClick={() => setOpenLogPopup(true)}>
            Login / Register
          </NavMenuLinks>
        </NavMenu>
        <PopUp openPopup={openLogPopup} setOpenPopup={setOpenLogPopup}>
          <Login />
        </PopUp>
        <PopUp openPopup={openError} setOpenPopup={setOpenError}>
          <Error />
        </PopUp>
      </Nav>
    </ClickAwayListener>
  );
};

export default Navbar;
