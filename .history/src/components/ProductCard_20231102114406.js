import * as React from "react";
import { DefaultContext } from "react-icons";
import styled from "styled-components";

function MyComponent(props) {
  return (
    <Div>

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

    </Div>
  );
}

const Div = styled.div`
 
`;

const Div2 = styled.div`
 
`;

const Div3 = styled.div`
 
`;

const Div4 = styled.div`
 
`;

const Div5 = styled.div`
  
`;

const Div6 = styled.div`
 
`;

const Img = styled.img`
  
`;

const Img1 = styled.img`

  width: 13rem;
  height :10rem;
  margin-bottom: 1rem;


`;


export default MyComponent;