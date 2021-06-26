import React from "react";
import styled from "styled-components";
import svg from "../Svg/front.svg";

const Section = styled.div`
  height: 100vh;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    height: 95vh;
  }
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  img {
    position: absolute;
    right: 0;
    object-fit: cover;
    opacity: 1;
    transition: 300ms ease-in;
    max-width: 50%;

    @media screen and (max-width: 992px) {
      opacity: 0;
    }
  }
`;
const Content = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  max-width: 1600px;
  width: calc(100% - 100px);
  color: #ffffff;

  h1 {
    font-size: clamp(1rem, 8vw, 2rem);
    font-weight: 500;
    text-transform: uppercase;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.9);
    text-align: left;
    margin-bottom: 0.8rem;
  }

  p {
    margin-bottom: 1.2rem;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.9);
    max-width: 50%;
    @media screen and (max-width: 992px) {
      max-width: 100%;
    }
  }
`;
const Bottom = styled.div``;

function Landing() {
  return (
    <Section>
      <Container>
        <Content>
          <h1>Free SEO Tools</h1>
          <p>
            Improve your site to increase its visibility when people search for
            products or services related to your business in Google, Bing, and
            other search engines.
          </p>
        </Content>
        <img src={svg} alt="" />
        <Bottom></Bottom>
      </Container>
    </Section>
  );
}

export default Landing;
