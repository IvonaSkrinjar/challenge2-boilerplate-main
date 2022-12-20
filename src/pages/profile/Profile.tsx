import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import UserProfile from "components/UserProfile/UserProfile";
import { AppLayout } from "components/Layouts";
import Headline from "components/Headline";

const Profile = () => {
    return (
        <Wrapper className="page">
            <AppLayout >
                <Headline title="Profile" />
                <UserProfile />
            </AppLayout>
        </Wrapper>
    );
};
const Wrapper = styled.section`
  
`;

export default Profile;
