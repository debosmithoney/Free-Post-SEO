import React, { useState } from "react";
import GlobalStyle from "../globalStyles";
import Footer from "../Components/Footer";
import Tools from "../Components/Tools";
import Landing from "../Components/Landing";
import Dropdown from "../Components/Dropdown";
import Navbar from "../Components/Navbar";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <GlobalStyle />
      <ReactNotification />
      <Navbar toggle={toggle} id="navbar" />
      <Dropdown isOpen={isOpen} toggle={toggle} id="drop" />
      <Landing id="landing" />
      <Tools id="tools" />
      <Footer id="contact" />
    </>
  );
};

export default Home;
