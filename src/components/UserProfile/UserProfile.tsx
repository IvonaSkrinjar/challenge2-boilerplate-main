import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import styled from "styled-components";
import { AuthContext } from "context/auth/AuthContext";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    large: {
        width: theme.spacing(20),
        height: theme.spacing(20),
    },
}));

const UserProfile = () => {
    const classes = useStyles();

    const { user } = useContext(AuthContext);

    return (
        <Wrapper>           
            <div className={classes.root}>            
                <Card className={classes.root} variant="outlined">
                    <CardContent>
                        <Avatar className={classes.large} />
                        <Typography variant="h5">
            Welcome {user.name.firstname}
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.section`
  
`;

export default UserProfile;
