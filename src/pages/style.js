import styled, { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`

  *{
    background-color: #0C1015;
    }
    `;

export const Conteiner = styled.div`
  background-color: #141921;
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
    color: #4F5054;
    font-size: 16px;
    margin: 2px;
  }
   & button:hover, button:active  {
    margin-top: 2px;
    color: #D27842;
  }
  & p {
    color: #4F5054;
    font-size: 16px;
    margin: 5px 15px;
  }
  & p:hover, p:active  {
    /* margin-top: 2px; */
    color: #D27842;
  }
`;
export const ImgDetail = styled.img`
  border-radius: 0 0 25px 25px;
  width: 100%;
  margin-bottom: 70px;
  /* margin-top: 15px; */
  /* margin: 0 auto; */
  `;
export const TitleDetail = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  border-radius: 25px;
  background-color: #000;
  margin-top: 290px;
  opacity: 55%;
  filter: blur(7px)/* (5px) */;
  position: absolute;

  & h1, p {
    opacity: 100%;
    color: #f2f2f2;
  }
  & button {
    background: transparent;
    border: none;
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
