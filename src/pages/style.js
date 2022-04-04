import styled from 'styled-components';

export const Conteiner = styled.div`
  background-color: #0C0F14;
  width: 100%;
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
  background-color: #0C0F14;
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
`;
export const ImgDetail = styled.img`
  border-radius: 20px;
  width: 100%;
  margin-top: 15px;
  /* margin: 0 auto; */
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
    /* margin-top: 25px; */
    margin-bottom: 25px;
  }
`;
export const Button = styled.button`
  background-color: #D27842;
  width: 90%;
  font-size: 24px;
  font-weight: 700;
  color: #0C0F14;
  border-radius: 20px;
  padding: 10px 15px;
  margin: 15px ;
`;
