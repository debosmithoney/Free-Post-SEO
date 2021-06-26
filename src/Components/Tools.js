import { Button, FormControl, TextField } from "@material-ui/core";
import React, { useState } from "react";
import styled from "styled-components";
import USSvg from "../Svg/undraw_link_shortener_mvf6.svg";
import WsSvg from "../Svg/undraw_heatmap_uyye.svg";
import YTSvg from "../Svg/undraw_Download_re_li50.svg";

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
`;

function Tools() {
  const [shortenerButtons, setShortenerButtons] = useState(false);
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

      const data = await response.json();

      console.log(data);
      input.value = `${window.location.host}/url/${data.urlid}`;
      input.setAttribute("readonly", "true");
      e.target
        .querySelector("button[type=submit]")
        .setAttribute("disabled", "true");

      setShortenerButtons(true);
    } catch (error) {
      console.error(error);
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

      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const download = async (e) => {
    e.preventDefault();
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
    window.open(url, "_blank");
  }

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
                label="Enter your URL"
                style={{ paddingBottom: "15px" }}
              />
              {!shortenerButtons && (<Button
                type="submit"
                variant="contained"
                color="primary"
                style={{ paddingInline: "10px" }}
              >
                Shorten it 🚀
              </Button>)}
              {shortenerButtons && (
                <>
                  <Bottom>
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
                  </Bottom>
                </>
              )}
            </FormControl>
          </form>
        </ColumnLeft>
        <ColumnRight>
          <img src={USSvg} alt="" />
        </ColumnRight>
      </Container>
      <Container style={{ background: "transparent" }}>
        <ColumnLeft reverse="false">
          <h1>Bookmarker 🔎</h1>
          <p>Get the Glimpse of the Webpage</p>
          <form onSubmit={scrapurl}>
            <FormControl>
              <TextField
                id="scrapurl"
                name="url"
                type="url"
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
