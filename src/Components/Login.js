import React, { useState } from 'react';
import styled from 'styled-components';
import SuSvg from  '../Svg/undraw_authentication_fsn5.svg';
import SiSvg from '../Svg/undraw_unlock_24mb.svg';
import fpSvg from '../Svg/undraw_forgot_password_gi2d.svg'
import TextField from '@material-ui/core/TextField';
import { Button, FormControl } from '@material-ui/core';



// color: #6C63FF

const Front = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 400px;
    padding: 2rem 2rem;
    max-height: 500px;
    @media screen and (max-width: 768px){
     grid-template-columns:1fr;

 }
`;
const LeftSide = styled.div`
@media screen and (max-width: 768px){
    display:none;
}
`;
const RightSide = styled.div`
    display:flex;
    flex-direction:column;
    align-items: center;
`;


const SignTab = styled.div`
    display: flex;
    padding: 1rem 1rem;
    justify-content:space-between;
    
    h2{
        padding-inline:10px;
    }
`;

const Bottom = styled.div`
    padding: 2rem 0;
    opacity:0.8;
    display:flex;
    font-size:0.8rem;
    cursor:pointer;

`;



function Login() {
    const [showlog,setShowlog] = useState("signin")

    const changeState= () =>{
        setShowlog("signup")
    }

    return (
        <Front>
            <LeftSide>
            {showlog === "signin" && 
                <img src={SiSvg} alt=""  height="300px" />}
            {showlog === "signup" && 
                <img src={SuSvg} alt=""  height="300px" />}
            {showlog === "forgot" && 
                <img src={fpSvg} alt=""  height="300px" />}
            </LeftSide>
            <RightSide >
            {showlog === "signin" && <>
                <FormControl>
                <SignTab >
                    <h2 >Sign in</h2>
                </SignTab>
                <TextField  id="standard-required" label="Email" type="email"  color="whitesmoke" style={{paddingBottom:"5px"}}/>
                <TextField  id="standard-password-input" label="Password" type="password" autoComplete="current-password"  style={{paddingBottom:"20px"}}/>
                <Button variant="contained" color="primary"style={{paddingInline:"10px"}}>Login</Button>
                <Bottom>
                    <Button color="primary" style={{paddingInline:"10px"}} onClick={() => setShowlog('forgot')}>Forgot Password</Button>
                    <Button color="primary" onClick={changeState}>Sign Up</Button>
                </Bottom>
                </FormControl>
                </>}
                {showlog === 'signup' && <>
                <FormControl>
                    <SignTab >
                        <h2 >Sign Up</h2>
                    </SignTab>
                    <TextField  id="standard-required" type="text" label="Name"  color="whitesmoke" style={{paddingBottom:"5px"}}/>
                    <TextField  id="standard-required" label="Email" type="email"  color="whitesmoke" style={{paddingBottom:"5px"}}/>
                    <TextField  id="standard-password-input" label="Password" type="password" autoComplete="current-password"  style={{paddingBottom:"20px"}}/>
                    <TextField  id="standard-password-input" label="Re-enter Password" type="password" autoComplete="current-password"  style={{paddingBottom:"20px"}}/>
                    <Button variant="contained" color="primary"style={{paddingInline:"10px"}}>Sign Up</Button>
                    <Bottom>
                        <Button color="primary" style={{paddingInline:"10px"}} onClick={() => setShowlog('signin')}>Already have account?</Button>
                    </Bottom>
                    </FormControl>
                    </>}
                {showlog === 'forgot' && <>
                <FormControl>
                    <SignTab >
                        <h2>Enter your registered email</h2>
                    </SignTab>
                    <TextField  id="standard-required" label="Email" type="email"  color="whitesmoke" style={{paddingBottom:"15px"}}/>
                    <Button variant="contained" color="primary"style={{paddingInline:"10px"}}>Confirm</Button>
                    <Bottom>
                        <Button color="primary" style={{paddingInline:"10px"}} onClick={() => setShowlog('signin')}>remember your password</Button>
                    </Bottom>
                    </FormControl>
                </>}
            </RightSide>
        </Front>
    )
}

export default Login
