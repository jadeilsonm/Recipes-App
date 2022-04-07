import React from 'react';
import styled from 'styled-components';

// const Y = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 100%;
//   height: 90vh;
//   align-items: center;
//   justify-content: center;
//   div {
//     display: flex;
//     margin-top: -20px;

//   }
//   h1 {
//     font-size: 500%;
//     margin: 0;
//   }
//   span {
//     background-color: #D62D51;
//     width: 50px;
//     height: 50px;
//     border-radius: 50%;
//     margin: 0 10px;
//   }
//   .one {
//     animation: loading 0.6s ease-out infinite alternate-reverse both;
//   }
//   .two {
//     animation: loading 0.6s ease-out 1s infinite alternate-reverse both;
//   }
//   .three {
//     animation: loading 0.6s ease-out 1.5s infinite alternate-reverse both;
//   }

//   @keyframes loading {
//     100%{
//       transform: translateY(90%);
//     }
// }
// `;

// const Q = styled.span`
//   background: #D62D51;
//   display: block;
//   height:90px;
//   width: 90px;
//   border-radius: 15%;
//   animation: loading 1s ease-out infinite alternate-reverse both;

// @keyframes loading {

//   100%{
//     transform: translateY(-200%) rotateZ(360deg);
//   }
// }
// `;

const X = styled.span`
  background: linear-gradient(#AABAC1 80%, #D62D51 20%);
  animation: loading 0.8s cubic-bezier(0.37, 0, 0.63, 1) both;
  animation-iteration-count: infinite;

  display: block;
  height:90px;
  width: 90px;
  border-radius: 50%;

  ::before {
    align-items: center;
    background-color: #0C1015;
    border-radius: 50%;
    content: '';
    display: inline-flex;
    height: 100%;
    justify-content: center;
    transform: scale(0.8);
    width: 100%;
  }

  @keyframes loading {
    0%{
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default function Loading() {
  return (
    <div
      style={
        { height: '90vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center' }
      }
    >
      <X />
      {/* <Y>
        <h1>Loading</h1>
        <div>
          <span className="one" />
          <span className="two" />
          <span className="three" />
        </div>
      </Y> */}
    </div>
  );
}
