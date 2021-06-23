import {createGlobalStyle} from 'styled-components';

const GlobalStyle =createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,800;1,200;1,900&display=swap');

 *{
     margin:0;
     padding:0;
     box-sizing:border-box;
     font-family: 'Poppins', sans-serif;
     outline: none;
 }

 html,body{
     overflow-x: hidden;
 }
`;

export default GlobalStyle;