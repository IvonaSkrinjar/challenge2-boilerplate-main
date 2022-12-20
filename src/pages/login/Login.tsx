import React from "react";
import styled from "styled-components";
import { AppLayout } from "components/Layouts";
import Signin from "components/Signin";
import Headline from "components/Headline";


const Login = () => { 
   
    return (
        <Wrapper className="page">
            <AppLayout>
                <Headline title="Login" />
                <Signin />
            </AppLayout>
        </Wrapper>
    );
};
const Wrapper = styled.section`

   .container {
    padding: 9rem 0;
    display:flex;
  }
  
  .page_loading {
    font-size: 3.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 768px) {
    padding: 0 2.4rem;
  }
`;

export default Login;
