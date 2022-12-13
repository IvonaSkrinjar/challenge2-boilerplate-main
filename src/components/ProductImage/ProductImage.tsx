import styled from "styled-components";
import React from "react";

interface IProps {
  img: string;
}

const ProductImage = ({ img }: IProps) => {
    return (
        <Wrapper>
            <div className="main-screen">
                <img alt="product main" src={img} />
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.section`
  .main-screen {
    display: grid;
    margin-top: -5rem;
    width: 250%;
    height: 150px;
    ::before {
      content: "";
      display: block;
      width: 100%;
      height: 100%;
      z-index: -1;
    }
  }
  img {
    max-width: 100%;
    max-height: 100%;
    background-size: cover;
    object-fit: contain;
    cursor: pointer;
  }
  display: grid;
  grid-template-columns: 0.4fr 1fr;
  gap: 1rem;

 
`;

export default ProductImage;
