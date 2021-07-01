import React from "react";
import styled from "styled-components";
import {
  RiFacebookFill,
  RiInstagramLine,
  RiLinkedinFill,
  RiTwitterFill,
} from "react-icons/ri";

const Container = styled.div`
  padding: 80px 60px;
  background: #000;
  bottom: 0;
  @media (max-width: 768px) {
    padding: 40px 10px;
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin: 0 auto;

  & h1 {
    color: #fff;
    font-size: 32px;
    text-align: center;
    width: 300px;
    margin-bottom: 80px;
  }
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
const Links = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 16px;
  text-decoration: none;
  align-items: center;
  cursor: pointer;

  &:hover {
    color: #6c63ff;
    transition: 200ms ease-in;
  }
`;
const Title = styled.div`
  color: #fff;
  margin-bottom: 40px;
  font-size: 24px;
  font-weight: bold;
`;

const Facebook = styled(RiFacebookFill)`
  font-size: 16px;
  &:hover {
    color: #385898;
  }
`;
const Instagram = styled(RiInstagramLine)`
  &:hover {
    color: #8a3ab9;
  }
`;
const LinkedIn = styled(RiLinkedinFill)`
  &:hover {
    color: #0e76a8;
  }
`;
const Twitter = styled(RiTwitterFill)`
  &:hover {
    color: #1da1f2;
  }
`;

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Row>
          <Column style={{ gridColumn: "1/3" }}>
            <h1>Let's get you a Better Internet Experience 🚀</h1>
          </Column>
          <Column>
            <Title>Contact Us</Title>
            <Links href="tel:+918788305490">+91 87883 05490</Links>
            <Links href="mailto:support@freepostseo.com">
              support@freepostseo.com
            </Links>
          </Column>
          <Column>
            <Title>Social</Title>
            <Links href="https://www.facebook.com/freepostseo/" target="_blank">
              <Facebook /> Facebook
            </Links>
            <Links
              href="https://www.instagram.com/free.post.seo/"
              target="_blank"
            >
              <Instagram /> Instagram
            </Links>
            <Links
              href="https://www.linkedin.com/company/freepostseo/"
              target="_blank"
            >
              <LinkedIn /> LinkedIn
            </Links>
            <Links href="https://twitter.com/freepostseo1/" target="_blank">
              <Twitter /> Twitter
            </Links>
          </Column>
        </Row>
      </Wrapper>
    </Container>
  );
};

export default Footer;
