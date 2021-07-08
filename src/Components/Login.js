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
  padding: 2rem 0;
  opacity: 0.8;
  display: flex;
  font-size: 0.8rem;
  cursor: pointer;
`;

const signupnUser = async (e) => {
  // const passwordRegExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  const passwordRegExp =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

  e.preventDefault();
  const [password, passwordRepeat] = [...e.target.querySelectorAll("input")]
    .filter((e) => e.name.match(/user\[((password)|(password-repeat))\]/gi))
    .map((e) => e.value);

  if (password.match(passwordRegExp) === null)
    return alert(
      "Password must contain at least one uppercase, lowercase, number, symbol each and should be at least 8 characters"
    );

  if (password !== passwordRepeat) return alert("Passwords Don't Match");

  const body = [...e.target.querySelectorAll("input")]
    .filter((e) => e.name.match(/user\[((name)|(email)|(password))\]/gi))
    .map((e) => `${encodeURIComponent(e.name)}=${encodeURIComponent(e.value)}`)
    .join("&");

  try {
    const res = await fetch("https://fpseo.herokuapp.com/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: body,
    });

    const data = await res.json();

    console.log(data);
  } catch (error) {
    alert(error.message);
  }
};

const loginUser = async (e) => {
  e.preventDefault();

  const passwordRegExp =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

  const [password] = [...e.target.querySelectorAll("input")]
    .filter((e) => e.name.match(/user\[(password)\]/gi))
    .map((e) => e.value);

  if (password.match(passwordRegExp) === null)
    return alert(
      "Password must contain at least one uppercase, lowercase, number, symbol each and should be at least 8 characters"
    );

  const body = [...e.target.querySelectorAll("input")]
    .filter((e) => e.name.match(/user\[((email)|(password))\]/gi))
    .map((e) => `${encodeURIComponent(e.name)}=${encodeURIComponent(e.value)}`)
    .join("&");

  try {
    const res = await fetch("https://fpseo.herokuapp.com/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: body,
    });

    const data = await res.json();

    console.log(data);
  } catch (error) {
    alert(error);
  }
};

function Login() {
  const [showlog, setShowlog] = useState("signin");

  const changeState = () => {
    setShowlog("signup");
  };

  return (
    <Front>
      <LeftSide>
        {showlog === "signin" && <img src={SiSvg} alt="" height="300px" />}
        {showlog === "signup" && <img src={SuSvg} alt="" height="300px" />}
        {showlog === "forgot" && <img src={fpSvg} alt="" height="300px" />}
        {showlog === "verifyotp" && <img src={voSvg} alt="" height="300px" />}
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
                  id="standard-required"
                  label="Email"
                  type="email"
                  name="user[email]"
                  style={{ paddingBottom: "5px" }}
                />
                <TextField
                  id="standard-password-input"
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
                  id="standard-required"
                  type="text"
                  label="Name"
                  name="user[name]"
                  style={{ paddingBottom: "5px" }}
                />
                <TextField
                  id="standard-required"
                  label="Email"
                  type="email"
                  name="user[email]"
                  style={{ paddingBottom: "5px" }}
                />
                <TextField
                  id="standard-password-input"
                  label="Password"
                  type="password"
                  name="user[password]"
                  autoComplete="current-password"
                  style={{ paddingBottom: "20px" }}
                />
                <TextField
                  id="standard-password-input"
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
            <TextField
              id="standard-required"
              label="Email"
              type="email"
              helpertext="Enter your registered password"
              style={{ paddingBottom: "15px" }}
            />
            <Button
              variant="contained"
              color="primary"
              style={{ paddingInline: "10px" }}
              onClick={() => setShowlog("verifyotp")}
            >
              Send OTP
            </Button>
            <Bottom>
              <Button
                color="primary"
                style={{ paddingInline: "10px" }}
                onClick={() => setShowlog("signin")}
              >
                login
              </Button>
            </Bottom>
          </>
        )}
        {showlog === "verifyotp" && (
          <>
            <SignTab>
              <h2>Verify OTP</h2>
            </SignTab>
            <TextField
              id="standard-required"
              label="Email"
              type="email"
              helpertext="Enter your OTP"
              style={{ paddingBottom: "15px" }}
            />
            <Button
              variant="contained"
              color="primary"
              style={{ paddingInline: "10px" }}
              onClick={() => setShowlog("reset")}
            >
              Reset
            </Button>
          </>
        )}
        {showlog === "reset" && (
          <>
            <SignTab>
              <h2>Verify OTP</h2>
            </SignTab>
            <TextField
              id="standard-required"
              label="Enter new password"
              type="password"
              style={{ paddingBottom: "15px" }}
            />
            <TextField
              id="standard-required"
              label="Re-enter password"
              type="password"
              helpertext="Enter your OTP"
              style={{ paddingBottom: "15px" }}
            />
            <Button
              variant="contained"
              color="primary"
              style={{ paddingInline: "10px" }}
              onClick={() => setShowlog("success")}
            >
              Confirm
            </Button>
          </>
        )}
        {showlog === "success" && (
          <>
            <SignTab>
              <h2>Welcome "User Name"</h2>
            </SignTab>
            <p style={{alignSelf: "center",justifyContent:"center"}}>We would like to Provide you with best features for Free🎉</p>
          </>
        )}
      </RightSide>
    </Front>
  );
}

export default Login;
