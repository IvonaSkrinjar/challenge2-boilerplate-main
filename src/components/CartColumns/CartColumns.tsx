import { Typography } from "@mui/material";
import styled from "styled-components";
import React from "react";
import { useTranslation } from "react-i18next";

const CartColumns = () => {
    const { t } = useTranslation();
   
    return (
        <Wrapper>
            <div className="content">
                <Typography component="h5" variant="h5">
            Item
                </Typography>
                <Typography component="h5" variant="h5">
                    {t("price")}
                </Typography>
                <Typography component="h5" variant="h5">
                    {t("quantity")}
                </Typography>
                <Typography component="h5" variant="h5">
                    {t("subtotal")}
                </Typography>
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
