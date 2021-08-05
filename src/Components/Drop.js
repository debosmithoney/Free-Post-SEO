import React from "react";
import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { dropData } from "../Data/NavMenu";

const Menu = styled.div`
  background: #5f0a87;
  width: 200px;
  position: absolute;
  bottom: 0;
  transform: translateY(100%);
  list-style: none;
  text-align: center;
  border-radius: 0 0 15px 15px;
  transition: 200ms ease-in;
`;

const MenuLink = styled(LinkS)`
  cursor: pointer;
  display: block;
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: #fff;
  padding: 6px;
  transition: 200ms ease-in-out;

  &:last-child {
    border-radius: 0 0 15px 15px;
  }

  &:hover {
    background: #6c63ff;
  }
`;

function Drop({ background, toggle }) {
  return (
    <Menu style={{ background: `${background}` }}>
      {dropData.map((item, index) => (
        <MenuLink
          to={item.link}
          key={index}
          smooth={true}
          duration={1000}
          onClick={() => toggle((prev) => !prev)}
        >
          {item.title}
        </MenuLink>
      ))}
    </Menu>
  );
}

export default Drop;
