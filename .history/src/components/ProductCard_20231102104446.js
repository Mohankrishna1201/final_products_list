import React from "react";
import styled from "styled-components";

function ProductCard(props) {
  return (
    <>
      <Container>
        <Product>
          <Title>Best Seller</Title>
          <Name>Nike Jordan</Name>
        </Product>
        <Price>$302.00</Price>
        <Image loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d898cc97-e61b-49af-8c64-59b23470a1c9?apiKey=5aaf655cd4cf4eae877ac3f53441ec52&" />
      </Container>
      <Container>
        <Product>
          <Title>Best Seller</Title>
          <Name>Nike Air Max</Name>
        </Product>
        <Price>$752.00</Price>
        <Image loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b114781e-0815-41eb-a2b5-288492fbaf79?apiKey=5aaf655cd4cf4eae877ac3f53441ec52&" />
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  gap: 20px;
`;

const Product = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Title = styled.div`
  color: var(--0-d-6-efd, #0d6efd);
  text-transform: uppercase;
  white-space: nowrap;
  font: 500 12px/133% Poppins, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Name = styled.div`
  color: var(--6-a-6-a-6-a, #6a6a6a);
  margin-top: 4px;
  white-space: nowrap;
  font: 600 16px/125% Raleway, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Price = styled.div`
  color: var(--2-b-2-b-2-b, #2b2b2b);
  margin-top: 12px;
  white-space: nowrap;
  font: 500 14px/114% Poppins, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Image = styled.img`
  aspect-ratio: 0.97;
  object-fit: contain;
  object-position: center;
  width: 34px;
  overflow: hidden;
  align-self: end;
  margin-top: 126px;
  max-width: 100%;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

export default ProductCard;