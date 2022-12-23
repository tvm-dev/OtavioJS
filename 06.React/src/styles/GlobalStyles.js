import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
margin: 0;
padding: 0;
outline: none;
box-sizing: border-box;

}

body{
  font-family: sans-serif;
  background: #0078D7;
}

html, border-style, #root {
  height: 100%;
}
a {
  text-decoration: none;
}
ul {
  list-style: none;
}
`;

export const Container = styled.section`
max-width: 80%;
background: #fff;
margin: 30px auto;
padding: 30px;
border-radius: 10px;
box-shadow: 0 0 10px rgba(0,0,0,1);
`;
