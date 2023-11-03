import * as React from "react";
import { DefaultContext } from "react-icons";
import styled from "styled-components";

function MyComponent({ img, title, star, reviews, prevPrice, newPrice }) {
  return (
    <Div>
      <img src="https://m.media-amazon.com/images/I/71h5+MbEK7L._AC_UY625_.jpg" alt="" className="card-img" />
      <Div2>
        <Div3>
          <Div4>Best Seller</Div4>
          <Div5><h3 className="card-title">nike</h3></Div5>
        </Div3>
        <Div6>
          <section className="card-price">
            <div className="price">
              <del>100</del> 50
            </div>
          </section>
        </Div6>
      </Div2>
      <Img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0f759bbc-55a4-4354-a5e1-ead040ee6ad2?"
      />
    </Div>
  );
}

const Div = styled.div`
  align-items: flex-start;
  border-radius: 16px;
  background-color: #fff;
  display: flex;
  padding-left: 12px;
  gap: 18px;
`;

const Div2 = styled.div`
  align-items: flex-start;
  align-self: end;
  display: flex;
  
  flex-direction: column;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
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
  width: 34px;
  overflow: hidden;
  align-self: end;
  margin-top: 166px;
  max-width: 100%;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;


export default MyComponent