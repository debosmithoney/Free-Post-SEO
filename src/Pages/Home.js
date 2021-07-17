import React, { useState } from "react";
import GlobalStyle from "../globalStyles";
import Footer from "../Components/Footer";
import Tools from "../Components/Tools";
import Landing from "../Components/Landing";
import Navbar from "../Components/Navbar";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

const Home = () => {
  const getCookies = () => {
    return Object.fromEntries(
      document.cookie
        .split(";")
        .map((e) => e.trim())
        .map((e) => e.split("="))
    );
  };

  const [openPopup, setOpenPopup] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(
    getCookies()["isLoggedIn"] ? true : false
  );
  const [user, setUser] = useState(
    isLoggedIn ? JSON.parse(localStorage.getItem("user")) : {}
  );

  return (
    <>
      <GlobalStyle />
      <ReactNotification />
      <Navbar
        id="navbar"
        isLoggedIn={isLoggedIn}
        setLoggedIn={setLoggedIn}
        user={user}
        setUser={setUser}
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      />
      <Landing id="landing" />
      <Tools
        id="tools"
        isLoggedIn={isLoggedIn}
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      />
      <Footer id="contact" />
    </>
  );
};

export default Home;
