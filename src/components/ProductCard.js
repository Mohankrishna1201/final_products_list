import * as React from "react";
import { DefaultContext } from "react-icons";
import styled from "styled-components";

function MyComponent(props) {
  return (


    <Div2>
      <Img1 src="https://m.media-amazon.com/images/I/71h5+MbEK7L._AC_UY625_.jpg" alt="" />
      <Div3>
        <Div4>Best Seller</Div4>
        <Div5>Nike Air Max</Div5>
      </Div3>
      <Div6>$752.00</Div6>
      <Img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0f759bbc-55a4-4354-a5e1-ead040ee6ad2?"
      />
    </Div2>


  );
}


const Div2 = styled.div`
  margin: 20px;
  border: 2px solid #ededed;
  padding: 20px;
  cursor: pointer;
`;

const Div3 = styled.div`
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex-direction: column;
`;

const Div4 = styled.div`
  color: var(--0-d-6-efd, #0d6efd);
  text-transform: uppercase;
  align-self: stretch;
  white-space: nowrap;
  font: 500 12px/133% Poppins, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div5 = styled.div`
  color: var(--6-a-6-a-6-a, #6a6a6a);
  align-self: stretch;
  margin-top: 4px;
  white-space: nowrap;
  font: 600 16px/125% Raleway, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div6 = styled.div`
  color: var(--2-b-2-b-2-b, #2b2b2b);
  align-self: stretch;
  margin-top: 12px;
  white-space: nowrap;
  font: 500 14px/114% Poppins, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Img = styled.img`
  aspect-ratio: 0.97;
  object-fit: contain;
  object-position: center;
  width: 35px;
  overflow: hidden;
  align-self: end;

  max-width: 100%;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Img1 = styled.img`

  width: 13rem;
  height :10rem;
  margin-bottom: 1rem;


`;


export default MyComponent;