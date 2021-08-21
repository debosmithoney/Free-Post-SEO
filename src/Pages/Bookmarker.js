import React, { useState } from "react";
import GlobalStyle from "../globalStyles";
import { Button } from "@material-ui/core";
import styled from "styled-components";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import NDSvg from "../Svg/undraw_No_data_re_kwbl.svg";
import { Link as LinkR } from "react-router-dom";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import CloseIcon from "@material-ui/icons/Close";

const dataScrap = {
  url: "https://youtu.be/f3KeS9r4M6U",
  title:
    "Main Tumhara - Dil Bechara|Official Lyric Video|Sushant-Sanjana|A.R. Rahman|Jonita-Hriday - YouTube",
  favicon: "https://www.youtube.com/s/desktop/d6715535/img/favicon.ico",
  description:
    "Come fall in love with #MainTumhara#DilBechara #SushantSinghRajput #ARRahman #MainTumhara► Song name - Main Tumhara► Movie - Dil Bechara► Starring - Sushant ...",
  image: "https://i.ytimg.com/vi/f3KeS9r4M6U/maxresdefault.jpg",
};

const Section = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  grid-template-columns: 1fr 256px;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 0;
  }
`;

const Container = styled.div`
  scroll-snap-type: y mandatory;
  height: 100%;
  background: transparent;
  padding: 3rem calc((100vw - 1300px) / 2);
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* grid-template-rows: 500px; */
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding:0;
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
  order: 2;

  h1 {
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
    text-align: center;
  }
  p {
    margin-bottom: 2rem;
    text-align: center;
  }
  @media screen and (max-width: 768px) {
    height:50vh;
  }
`;

const ColumnRight = styled.div`
  background: #fff;
  padding: 1rem 2rem;
  order: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    order: 1;
    height:50vh;
  }
`;

const ScrapImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;

  img {
    height: auto;
    width: 100%;
    border-radius: 25px;
    @media screen and (max-width: 768px) {
      width: 70%;
    }
  }
`;

const LinkNav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
  width: 100%;
  height: 100vh;
  background-color: #22042f;
  color: white;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const BackButton = styled(LinkR)`
  cursor: pointer;
  position: absolute;
  padding: 10px 20px;
  border-radius: 25px;
  color: #fff;
  top: 100px;
  left: 60px;
  background: #5f0a87;
  text-decoration: none;
  :hover {
    background: orange;
  }
  :active {
    background: yellow;
  }
  @media screen and (max-width: 768px) {
    top: 60px;
    left: 10px;
    padding: 5px 15px;
  }
`;

const Drop = styled.div`
  cursor: pointer;
  position: absolute;
  padding: 10px 20px;
  border-radius: 25px;
  color: #000;
  z-index: 100;
  top: 60px;
  right: 20px;
  :hover {
    color: yellow;
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const Link = styled.div`
  cursor: pointer;
  width: 100%;
  color: #fff;
  padding: 6px;
  padding-left: 24px;
  font-size: 14px;
  transition: 200ms ease-in-out;
  :hover {
    background: orange;
  }
  :active {
    background: yellow;
  }
`;

const Search = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 10px;
  border-radius: 2px;
`;

const SearchInput = styled.input`
  outline-width: 0;
  border: none;
  border-radius: 8px;
  flex: 1;
  padding-left: 10px;
  font-size: 16px;
`;
const Content = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 1;
  background: #5f0a87;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  flex-direction: column;
  text-align: center;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
const Bookmarker = () => {
  const [iconChange, setIconChange] = useState(false);
  return (
    <>
      <GlobalStyle />
      <ReactNotification />
      <Section>
        <BackButton to="/">Go Back</BackButton>
        <Drop onClick={() => setIconChange(!iconChange)}>
          {iconChange ? <MenuOpenIcon style={{fontSize: '24px'}}/> : <CloseIcon style={{fontSize: '24px'}}/>}
        </Drop>
        {!iconChange && (
          <Content onClick={() => setIconChange(!iconChange)}>
            <Link style={{ fontSize: '24px'}}>Name</Link>
            <Link style={{ fontSize: '24px'}}>Name</Link>
            <Link style={{ fontSize: '24px'}}>Name</Link>
            <Link style={{ fontSize: '24px'}}>Name</Link>
            <Link style={{ fontSize: '24px'}}>Name</Link>
            <Link style={{ fontSize: '24px'}}>Name</Link>
            <Link style={{ fontSize: '24px'}}>Name</Link>
            <Link style={{ fontSize: '24px'}}>Name</Link>
          </Content>
        )}
        <Container>
          <ColumnLeft>
            <h1 style={{ fontSize: "24px" }}>
              {dataScrap.title.length > 64
                ? dataScrap.title.slice(0, 64) + "..."
                : dataScrap.title}
            </h1>
            <p>{dataScrap.description}</p>
            <Button
              color="primary"
              variant="contained"
              onClick={() => window.open(dataScrap.url)}
            >
              <img
                src={dataScrap.favicon}
                alt=""
                style={{ marginRight: "5px" }}
              />
              Redirect
            </Button>
          </ColumnLeft>
          <ColumnRight>
            <ScrapImg>
              <img
                src={dataScrap.image === null ? NDSvg : dataScrap.image}
                alt=""
              />
            </ScrapImg>
          </ColumnRight>
        </Container>

        <LinkNav>
          <Search>
            <SearchInput placeholder="Search Links" />
          </Search>
          <Link>
            https://en.savefrom.net/20/#url=http://youtube.com/&utm_source=youtube.com&utm_medium=short_domains&utm_campaign=ssyoutube.com&a_ts=1619286784.922
          </Link>
          <Link>Name</Link>
          <Link>Name</Link>
          <Link>Name</Link>
          <Link>Name</Link>
          <Link>Name</Link>
          <Link>Name</Link>
          <Link>Name</Link>
          <Link>Name</Link>
        </LinkNav>
      </Section>
    </>
  );
};

export default Bookmarker;
