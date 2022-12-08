import { Button, Typography } from "@mui/material";
import { FaMinus, FaPlus } from "react-icons/fa";
import styled from "styled-components";
import React from "react";

 interface IProps {
  setIncrease: any;
  setDecrease: any;
  amount:any;
}


const AmountButtons = ({ setIncrease, setDecrease, amount }: IProps) => {
    return (
        <Wrapper>
            <div className="cart-button">
                <div className="amount-toggle">
                    <Button className = "amount-button" onClick={() => setDecrease()}>
                        <FaMinus />
                    </Button>
                    <Typography className="amount-style">{amount}</Typography>
                    <Button className = "amount-button" onClick={() => setIncrease()}>
                        <FaPlus />
                    </Button>
                </div>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.section`  
display: grid;
width: 140px;

.amount-toggle {
  //margin-top: 3rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 1.4rem;
}
  .amount-button {
    border: none;
    color: #000;
    cursor: pointer;
  }

  .amount-style {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.colors.btn};
  }
`;
export default AmountButtons;

