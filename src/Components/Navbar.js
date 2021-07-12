import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import PopUp from "./PopUp";
import Login from "./Login";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../Svg/logo.png";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Drop from "./Drop";
import Notify from "./Notify";
import { apiurl, fetchOptions } from "../utils/fetchSetting";

const Nav = styled.div`
  margin: 0;
  height: 90px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  z-index: 100;
  position: fixed;
  width: 100%;
  background: "#5f0a87";
  transition: 200ms all ease-in;

  &:active {
    background: "#6C63FF";
  }

  @media screen and (max-width: 992px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    background-color: #5f0a87;
  }
`;

const Toggler = styled.div`
  display: none;
  cursor: pointer;
  position: absolute;
  right: 1.25rem;
  font-size: 32px;
  align-self: center;

  @media screen and (max-width: 992px) {
    display: block;
    color: #f5f5f5;
  }
`;

const Banner = styled(LinkR)`
  margin-left: 30px;
  padding-inline: 10px 20px;
  color: #f5f5f5;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 200ms ease-in;
  z-index: 100;

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
    margin-left: 0;
  }
`;

const NavMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  transition: 200ms ease-in;

  @media screen and (max-width: 992px) {
    justify-content: space-around;
    background-color: #5f0a87;
    position: fixed;
    top: -1000%;
    right: 0;
    height: 100vh;
    padding-block: 25vh;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const NavMenuLinks = styled(LinkS)`
  color: #f5f5f5;
  display: flex;
  padding: 5px;
  margin: 5px 15px;
  position: relative;
  justify-content: center;
  align-items: center;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.2rem;

  @media screen and (min-width: 992px) {
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
  }
`;

const Navbar = () => {
  const [navbar, setNavbar] = useState("transparent");
  const [openMenu, setOpenMenu] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true" ? true : false
  );
  const [user, setUser] = useState(
    isLoggedIn ? JSON.parse(localStorage.getItem("user")) : {}
  );

  const logout = async () => {
    try {
      const res = await fetch(`${apiurl}/users/logout`, fetchOptions("POST"));

      if (res.status !== 200) throw Error((await res.json()).error);

      localStorage.setItem("isLoggedIn", false);
      localStorage.removeItem("user");

      setLoggedIn(false);
      setUser({});

      Notify("Successfully Logged Out", "Bye 👋 See you soon!");
    } catch ({ message }) {
      Notify("Error Encountered", message, "danger");
    }
  };

  window.addEventListener("scroll", () =>
    setNavbar(window.scrollY >= 128 ? "#5f0a87" : "transparent")
  );

  return (
    <ClickAwayListener
      onClickAway={() => {
        setOpenDropdown(false);
      }}
    >
      <Nav style={{ background: `${navbar}` }}>
        <Banner to="/" smooth={true} duration={1000}>
          <img src={logo} alt="logo" />
          <h1>
            FreePostSEO
            <p>Empowering College Students</p>
          </h1>
          <Toggler onClick={() => setOpenMenu(!openMenu)}>
            {openMenu ? <FaTimes /> : <FaBars />}
          </Toggler>
        </Banner>
        <NavMenu
          style={openMenu ? { top: "0" } : { top: "-1000%" }}
          onClick={() => setOpenMenu(false)}
        >
          {!openMenu && openDropdown && (
            <Drop background={navbar} toggle={setOpenDropdown} />
          )}

          <NavMenuLinks
            to="home"
            smooth={true}
            duration={1000}
            onClick={() => setOpenMenu(false)}
          >
            Home
          </NavMenuLinks>

          <NavMenuLinks
            smooth={true}
            duration={1000}
            onClick={() =>
              openMenu
                ? setOpenMenu(!openMenu)
                : setOpenDropdown((prev) => !prev)
            }
            to={openMenu ? "tools" : ""}
          >
            Tools
          </NavMenuLinks>

          <NavMenuLinks
            to="footer"
            smooth={true}
            duration={1000}
            onClick={() => setOpenMenu(false)}
          >
            Contact Us
          </NavMenuLinks>

          {isLoggedIn ? (
            <NavMenuLinks
              onClick={() => {
                logout();
                setOpenMenu(false);
              }}
            >
              Logout
            </NavMenuLinks>
          ) : (
            <NavMenuLinks
              onClick={() => {
                setOpenMenu(false);
                setOpenPopup(true);
              }}
            >
              Login / Register
            </NavMenuLinks>
          )}
        </NavMenu>
        <PopUp openPopup={openPopup} setOpenPopup={setOpenPopup}>
          <Login
            setOpenPopup={setOpenPopup}
            setLoggedIn={setLoggedIn}
            setUser={setUser}
          />
        </PopUp>
      </Nav>
    </ClickAwayListener>
  );
};

export default Navbar;
