import styled, { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
  body {
    background-color: #0C1015;
  }
    `;

export const Conteiner = styled.div`
  background-color: #0C1015;
  width: 100%;
  /* height: 100vh; */
  margin: 72px 0px 50px 0px;
`;

export const ConteinerCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: #0C0F14;
`;

export const ConteinerTabs = styled.div`
  width: 100%;
  display: flex;
  height: 40px;
  display: flex;
  overflow-y: scroll;
  background-color: #0C1015;
  border: none;
  padding: 2px;

  & button {
    background: transparent;
    border: none;
    color: #AABAC1;
    font-size: 16px;
    margin: 2px;
  }
   & button:hover, button:active  {
    margin-top: 2px;
    color: #D27842;
  }
  & p {
    color: #AABAC1;
    font-size: 16px;
    margin: 5px 15px;
  }
  & p:hover, p:active  {
    /* margin-top: 2px; */
    color: #D27842;
  }
`;
export const ImgDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: end;
  justify-content: end;

  img{
   border-radius: 25px;
   width: 100%;
   margin-bottom: 62px;
  }
  `;
export const TitleDetail = styled.div`
  border-radius: 25px;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100px;
  justify-content: space-evenly;
  position: absolute;
  background-color: rgba(12,15,20,0.65);
  backdrop-filter: blur(10px);
  .buttons {
    display: flex;
    align-items: center;
  }
  h1 {
    color: #f2f2f2;
    font-size: 24px;
    font-weight: 700;
    margin: 0;
  }
  p {
    color: #AABAC1;
    font-size: 18px;
    font-weight: 500;
    margin: 0;
  }
`;

export const ContainerDetails = styled.div`
  width: 92%;
  margin: 0 auto;
  background-color: #0C0F14;
  & h1, h3 {
    color: #f2f2f2 ;
    font-weight: 400;
    margin-top: 25px
    /* margin-left: 10px; */
  }
  & p, li, label {
    color: #b6bbc7 ;
  }
  .paragraph {
    text-align: justify;
    margin: 5px;
  }
  & iframe {
    width: 100%;
    height: 190px;
    margin-bottom: 25px;
  }
`;
export const Button = styled.button`
  background-color: #D27842;
  width: 90%;
  font-size: 24px;
  font-weight: 500;
  color: #fff;
  border: none;
  border-radius: 20px;
  padding: 10px 15px;
  margin: 15px ;
  :active {
    margin-top: 18px;
  }
`;
export const ContainerExplore = styled.div`
  background-color: #0C0F14;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  & p {
    color: #f2f2f2;
    font-size: 24px;
  }
`;
export const LargeCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around ;
  width: 90%;
  border-radius: 25px;
  background: linear-gradient(145deg, rgba(38,43,52,1) 0%, rgba(12,15,20,1) 100%);
  margin: 9px;
  /* padding: 5px; */
  a {
    width: 70%;
  }
  .main {
    display: flex;
    align-items: center;
    margin: 5px;
    color: #f2f2f2;
  }
  h3 {
    font-size: 18px;
    font-weight: 600;
    background: transparent;
  }
  h4, h5 {
    font-size: 12px;
  }
  img {
    width: 40%;
    border-radius: 20px;
    background: transparent;
    padding: 5px;
    margin-right: 10px;
  } 
`;
export const Form = styled.label`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & input {
    width: 90%;
    padding: 10px 25px;
    border: none;
    border-radius: 10px;
    background-color: #141921;
    color: #f8f8f8;
    font-size: 18px;
    margin: 10px;
  }
`;
export const ContainerLogin = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 40px;
    font-weight: 700;
    color: #D27842;
    margin-bottom: 50px;
  }
`;
