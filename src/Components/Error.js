import React from 'react'
import styled from 'styled-components';
import { loginError } from '../Data/ErrorData';

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
  
  h1{
    font-size:clamp(1.5rem,20vw,2rem);
    justify-content:center;
    align-self:center;
  }
  p{
    font-size:clamp(0.8rem,20vw,1rem);
    justify-content:center;
    align-self:center;
  }
  
`;

function Error() {
    return (
        <Front>
        {loginError.map((item) =>(
            <>
            <LeftSide>
            <img src={item.src} alt="" height="300px"/>
            </LeftSide>
            <RightSide>
            <h1>{item.h1}</h1>
            <p>{item.desp}</p>
            <p>{item.desp2}</p>
            </RightSide>
            </>
        ))}
        </Front>
    )
}

export default Error
