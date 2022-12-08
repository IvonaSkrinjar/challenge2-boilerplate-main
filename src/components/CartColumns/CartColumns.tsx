import { Typography } from "@mui/material";
import styled from "styled-components";
import React from "react";

const CartColumns = () => {
    return (
        <Wrapper>
            <div className="content">
                <Typography component="h5" variant="h5">Item</Typography>
                <Typography component="h5" variant="h5">Price</Typography>
                <Typography component="h5" variant="h5">Quantity</Typography>
                <Typography component="h5" variant="h5">Subtotal</Typography>
                <span></span>
            </div>
            <hr />
        </Wrapper>
    );
};

const Wrapper = styled.section`  
  display: none;
   @media (min-width: 776px) {
    display: block;
    .content{
      display: grid;
      grid-template-columns: 316px 1fr 1fr 1fr;
      auto;
      justify-items: center;
      column-gap: 1rem;
      h5{
        color: grey;
        font-weight: 400;
      }
    }
   } 
`;
export default CartColumns;
