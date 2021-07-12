import React, { useState } from "react";
import GlobalStyle from "../globalStyles";
import Footer from "../Components/Footer";
import Tools from "../Components/Tools";
import Landing from "../Components/Landing";
import Navbar from "../Components/Navbar";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

const Home = () => {
  return (
    <>
      <GlobalStyle />
      <ReactNotification />
      <Navbar id="navbar" />
      <Landing id="landing" />
      <Tools id="tools" />
      <Footer id="contact" />
    </>
  );
};

export default Home;
