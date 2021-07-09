import React, { useState } from "react";
import styled from "styled-components";
import SuSvg from "../Svg/undraw_authentication_fsn5.svg";
import SiSvg from "../Svg/undraw_unlock_24mb.svg";
import fpSvg from "../Svg/undraw_forgot_password_gi2d.svg";
import voSvg from "../Svg/search.svg";
import rSvg from "../Svg/password.svg";
import suSvg from "../Svg/success.svg";
import TextField from "@material-ui/core/TextField";
import { Button, FormControl } from "@material-ui/core";
import { apiurl, fetchOptions } from "../utils/fetchSetting";

// color: #6C63FF

const Front = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 400px;
  padding: 2rem 2rem;
  max-height: 500px;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const LeftSide = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SignTab = styled.div`
  display: flex;
  padding: 1rem 1rem;
  justify-content: space-between;

  h2 {
    padding-inline: 10px;
  }
`;

const Bottom = styled.div`
  padding: 1rem 0;
  opacity: 0.8;
  display: flex;
  font-size: 0.8rem;
  cursor: pointer;
`;

function Login() {
  const [showlog, setShowlog] = useState("signin");
  const [resetid, setResetid] = useState("");

  const changeState = () => {
    setShowlog("signup");
  };

  const isValidPassword = (password) => {
    const passwordRegExp =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

    if (password.match(passwordRegExp) !== null) return true;

    alert(
      "Password must contain at least one uppercase, lowercase, number, symbol each and should be at least 8 characters"
    );

    return false;
  };

  const signupnUser = async (e) => {
    e.preventDefault();

    const [password, passwordRepeat] = [...e.target.querySelectorAll("input")]
      .filter((e) => e.name.match(/user\[((password)|(password-repeat))\]/gi))
      .map((e) => e.value);

    if (password !== passwordRepeat) return alert("Passwords Don't Match");

    if (!isValidPassword(password)) return;

    const body = [...e.target.querySelectorAll("input")]
      .filter((e) => e.name.match(/user\[((name)|(email)|(password))\]/gi))
      .map(
        (e) => `${encodeURIComponent(e.name)}=${encodeURIComponent(e.value)}`
      )
      .join("&");

    try {
      const res = await fetch(
        `${apiurl}/users/register`,
        fetchOptions("POST", body)
      );

      if (res.status !== 200) throw (await res.json()).error;

      console.log("Registered");
    } catch (error) {
      alert(error);
    }
  };

  const loginUser = async (e) => {
    e.preventDefault();

    const [password] = [...e.target.querySelectorAll("input")]
      .filter((e) => e.name.match(/user\[(password)\]/gi))
      .map((e) => e.value);

    if (!isValidPassword(password)) return;

    const body = [...e.target.querySelectorAll("input")]
      .filter((e) => e.name.match(/user\[((email)|(password))\]/gi))
      .map(
        (e) => `${encodeURIComponent(e.name)}=${encodeURIComponent(e.value)}`
      )
      .join("&");

    try {
      const res = await fetch(
        `${apiurl}/users/login`,
        fetchOptions("POST", body)
      );

      if (res.status !== 200) throw (await res.json()).error;

      console.log("Logged In");
    } catch (error) {
      alert(error);
    }
  };

  const forgotpassword = async (e) => {
    e.preventDefault();

    const body = [...new FormData(e.target).entries()]
      .map((e) => `${encodeURIComponent(e[0])}=${encodeURIComponent(e[1])}`)
      .join("&");

    try {
      const res = await fetch(
        `${apiurl}/users/forgot`,
        fetchOptions("POST", body)
      );

      if (res.status !== 200) throw (await res.json()).error;

      setShowlog("verify");
    } catch (error) {
      alert(error);
    }
  };

  const verifyOtp = async (e) => {
    e.preventDefault();

    const body = [...new FormData(e.target).entries()]
      .map((e) => `${encodeURIComponent(e[0])}=${encodeURIComponent(e[1])}`)
      .join("&");

    try {
      const res = await fetch(
        `${apiurl}/users/verifyotp`,
        fetchOptions("POST", body)
      );

      if (res.status !== 200) throw (await res.json()).error;

      setResetid((await res.json()).resetid);
      setShowlog("reset");
    } catch (error) {
      alert(error);
    }
  };

  const reset = async (e) => {
    e.preventDefault();

    const [password, passwordRepeat] = [...e.target.querySelectorAll("input")]
      .filter((e) => e.name.match(/(password)|(password-repeat)/gi))
      .map((e) => e.value);

    if (password !== passwordRepeat) return alert("Passwords Don't Match");

    if (!isValidPassword(password)) return;

    const body = [...e.target.querySelectorAll("input")]
      .filter((e) => e.name.match(/^password$/gi))
      .map(
        (e) => `${encodeURIComponent(e.name)}=${encodeURIComponent(e.value)}`
      )
      .join("&");

    try {
      const res = await fetch(
        `${apiurl}/users/reset/${resetid}`,
        fetchOptions("POST", body)
      );

      if (res.status !== 200) throw (await res.json()).error;

      console.log("Password Reset Successful");
      setShowlog("signin");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <Front>
      <LeftSide>
        {showlog === "signin" && <img src={SiSvg} alt="" height="300px" />}
        {showlog === "signup" && <img src={SuSvg} alt="" height="300px" />}
        {showlog === "forgot" && <img src={fpSvg} alt="" height="300px" />}
        {showlog === "verify" && <img src={voSvg} alt="" height="300px" />}
        {showlog === "reset" && <img src={rSvg} alt="" height="300px" />}
        {showlog === "success" && <img src={suSvg} alt="" height="300px" />}
      </LeftSide>
      <RightSide>
        {showlog === "signin" && (
          <>
            <SignTab>
              <h2>Sign in</h2>
            </SignTab>
            <form onSubmit={loginUser}>
              <FormControl>
                <TextField
                  label="Email"
                  type="email"
                  name="user[email]"
                  style={{ paddingBottom: "5px" }}
                />
                <TextField
                  label="Password"
                  type="password"
                  name="user[password]"
                  autoComplete="current-password"
                  style={{ paddingBottom: "20px" }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  style={{ paddingInline: "10px" }}
                >
                  Login
                </Button>
              </FormControl>
            </form>
            <Bottom>
              <Button
                color="primary"
                style={{ paddingInline: "10px" }}
                onClick={() => setShowlog("forgot")}
              >
                Forgot Password
              </Button>
              <Button color="primary" onClick={changeState}>
                Sign Up
              </Button>
            </Bottom>
          </>
        )}
        {showlog === "signup" && (
          <>
            <SignTab>
              <h2>Sign Up</h2>
            </SignTab>
            <form onSubmit={signupnUser}>
              <FormControl>
                <TextField
                  type="text"
                  label="Name"
                  name="user[name]"
                  style={{ paddingBottom: "5px" }}
                />
                <TextField
                  label="Email"
                  type="email"
                  name="user[email]"
                  style={{ paddingBottom: "5px" }}
                />
                <TextField
                  label="Password"
                  type="password"
                  name="user[password]"
                  autoComplete="current-password"
                  style={{ paddingBottom: "5px" }}
                />
                <TextField
                  label="Re-enter Password"
                  type="password"
                  name="user[password-repeat]"
                  autoComplete="current-password"
                  style={{ paddingBottom: "20px" }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  style={{ paddingInline: "10px" }}
                >
                  Sign Up
                </Button>
              </FormControl>
            </form>
            <Bottom>
              <Button
                color="primary"
                style={{ paddingInline: "10px" }}
                onClick={() => setShowlog("signin")}
              >
                Already have account?
              </Button>
            </Bottom>
          </>
        )}
        {showlog === "forgot" && (
          <>
            <SignTab>
              <h2>Forgot Password</h2>
            </SignTab>
            <form onSubmit={forgotpassword}>
              <FormControl>
                <TextField
                  name="email"
                  label="Email"
                  type="email"
                  helperText="Enter your registered email"
                  style={{ paddingBottom: "15px" }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  style={{ paddingInline: "10px" }}
                >
                  Send OTP
                </Button>
              </FormControl>
            </form>
            <Bottom>
              <Button
                color="primary"
                style={{ paddingInline: "10px" }}
                onClick={() => setShowlog("signin")}
              >
                Log In
              </Button>
            </Bottom>
          </>
        )}
        {showlog === "verify" && (
          <>
            <SignTab>
              <h2>Verify OTP</h2>
            </SignTab>
            <form onSubmit={verifyOtp}>
              <FormControl>
                <TextField
                  label="OTP"
                  type="text"
                  name="otp"
                  helperText="Enter OTP received"
                  style={{ paddingBottom: "15px" }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  style={{ paddingInline: "10px" }}
                >
                  Reset
                </Button>
              </FormControl>
            </form>
            <Bottom>
              <Button
                color="primary"
                style={{ paddingInline: "10px" }}
                onClick={() => setShowlog("signin")}
              >
                Cancel
              </Button>
            </Bottom>
          </>
        )}
        {showlog === "reset" && (
          <>
            <SignTab>
              <h2>Reset Password</h2>
            </SignTab>
            <form onSubmit={reset}>
              <FormControl>
                <TextField
                  label="Enter new password"
                  type="password"
                  name="password"
                  style={{ paddingBottom: "5px" }}
                />
                <TextField
                  label="Re-enter new password"
                  type="password"
                  name="password-repeat"
                  style={{ paddingBottom: "15px" }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  style={{ paddingInline: "10px" }}
                >
                  Confirm
                </Button>
              </FormControl>
            </form>
            <Bottom>
              <Button
                color="primary"
                style={{ paddingInline: "10px" }}
                onClick={() => setShowlog("signin")}
              >
                Cancel
              </Button>
            </Bottom>
          </>
        )}
        {showlog === "success" && (
          <>
            <SignTab>
              <h2>Welcome "User Name"</h2>
            </SignTab>
            <p style={{ alignSelf: "center", justifyContent: "center" }}>
              We would like to Provide you with best features for Free🎉
            </p>
          </>
        )}
      </RightSide>
    </Front>
  );
}

export default Login;
