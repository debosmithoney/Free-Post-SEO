import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import PopUp from './PopUp';
import Login from './Login';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { menuData } from '../Data/NavMenu';


const DropDownContainer = styled.div`
 position: fixed;
 z-index: 999;
 width: 100%;
 height: 100%;
 background: #6C63FF;
 display:grid;
 align-items: center;
 top: 0;
 left: 0;
 transition: 0.3s ease-in-out;
 opacity: ${({isOpen}) => (isOpen ? '1' : '0')};
 top:${({isOpen}) => (isOpen ? '0' : '-100%')}; 
`;
const Icon = styled.div`
 position: absolute;
 top: 1.2rem;
 right: 1.5rem;
 background: transparent;
 font-size: 2rem;
 cursor: pointer;
 outline:none;

`;
const CloseIcon =  styled(FaTimes)`
 color: #ffffff;
 opacity:0.8;
`;
const DropdownWrapper = styled.div`
 
`;
const DropdowMenu = styled.div`
 display: grid;
 grid-template-columns: 1fr;
 grid-template-rows: repeat(5,80px);
 text-align: center;
 margin-bottom: 4rem;
 
 @media screen and (max-width: 480px){
 grid-template-rows: repeat(5,80px);
     
 }
`;
const DropdownLink = styled(Link)`
 display: flex;
 color: #ffffff;
 align-items:center;
 justify-content:center;
 text-decoration: none;
 list-style: none;
 color: #fff;
 cursor:pointer;
 transition: 0.3s ease-in-out;

 &:hover{
     color: #000d1a;

 }
`;


const Dropdown = ({isOpen,toggle}) => {
    const [openPopup, setOpenPopup] = useState(false); 
    return (
        <DropDownContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <DropdownWrapper>
            <DropdowMenu>
                {menuData.map((item,index) => (
                    <DropdownLink to={item.link} key={index}>
                        {item.title}
                    </DropdownLink>
                ))}
                <DropdownLink onClick={() => setOpenPopup(true)}>Login/Register</DropdownLink>
            </DropdowMenu>

            </DropdownWrapper>
            <PopUp
                openPopup = {openPopup}
                setOpenPopup = {setOpenPopup}
            >
            <Login/>
            </PopUp>
        </DropDownContainer>
    )
}

export default Dropdown
