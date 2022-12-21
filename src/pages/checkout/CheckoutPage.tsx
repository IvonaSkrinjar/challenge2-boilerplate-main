import React, { useContext, useState } from "react";
import {
    Stepper,
    Step,
    StepLabel,
    Typography,
    CircularProgress,
} from "@mui/material";
import { Formik, Form } from "formik";
import AddressForm from "../../components/CheckoutPage/Forms/AddressForm";
import PaymentForm from "../../components/CheckoutPage/Forms/PaymentForm";
import ReviewOrder from "../../components/CheckoutPage/ReviewOrder";
import CheckoutSuccess from "../../components/CheckoutPage/CheckoutSuccess";
import validationSchema from "../../components/CheckoutPage/FormModel/validationSchema";
import checkoutFormModel from "../../components/CheckoutPage/FormModel/checkoutFormModel";
import formInitialValues from "../../components/CheckoutPage/FormModel/formInitialValues";
import { AppLayout } from "components/Layouts";
import styled from "styled-components";
import { Button, Container, Paper } from "@mui/material";
import { CartContext } from "context/cart/CartContext";
import { WishlistContext } from "context/wishlist/Wishlist";

const steps = ["Shipping address", "Payment details", "Review your order"];
const { formId, formField } = checkoutFormModel;

function renderStepContent(step: any) {
    switch (step) {
    case 0:
        return <AddressForm formField={formField} />;
    case 1:
        return <PaymentForm formField={formField} />;
    case 2:
        return <ReviewOrder />;
    default:
        return <div>Not Found</div>;
    }
}

const CheckoutPage = () => {
    const { clearCart } = useContext(CartContext);
    const { clearWishlist } = useContext(WishlistContext);

    const [activeStep, setActiveStep] = useState(0);
    const currentValidationSchema = validationSchema[activeStep];
    const isLastStep = activeStep === steps.length - 1;

    function sleep(ms: any) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    async function submitForm(values: any, actions: any) {
        await sleep(1000);
        actions.setSubmitting(false);

        setActiveStep(activeStep + 1);
    }

    function handleSubmit(values: any, actions: any) {
        if (isLastStep) {
            submitForm(values, actions);
            clearCart();
            clearWishlist();
        } else {
            setActiveStep(activeStep + 1);
            actions.setTouched({});
            actions.setSubmitting(false);
        }
    }

    function handleBack() {
        setActiveStep(activeStep - 1);
    }

    return (
        <Wrapper>
            <React.Fragment>
                <AppLayout>
                    <Container>
                        <Paper
                            variant="outlined"
                            square
                            sx={{
                                marginTop: "48px",
                                marginBottom: "48px",
                                padding: "24px",
                                boxShadow: "0px 1px 5px 0px rgb(0 0 0 / 20%)",
                            }}
                        >
                            <Typography component="h1" variant="h4" align="center">
                Checkout
                            </Typography>

                            <Stepper activeStep={activeStep} className="stepper">
                                {steps.map((label) => (
                                    <Step key={label}>
                                        <StepLabel className="stepper-label">{label}</StepLabel>
                                    </Step>
                                ))}
                            </Stepper>

                            <React.Fragment>
                                {activeStep === steps.length ? (
                                    <CheckoutSuccess />
                                ) : (
                                    <Formik
                                        initialValues={formInitialValues}
                                        validationSchema={currentValidationSchema}
                                        onSubmit={handleSubmit}
                                    >
                                        {({ isSubmitting }) => (
                                            <Form id={formId}>
                                                <div className="active-form">
                                                    {renderStepContent(activeStep)}
                                                </div>
                                                <div className="buttons">
                                                    {activeStep !== 0 && (
                                                        <Button
                                                            onClick={handleBack}
                                                            className="back-button"
                                                        >
                                                            <span className="button-label">Back</span>
                                                        </Button>
                                                    )}
                                                    <div className="wrapper">
                                                        <Button
                                                            disabled={isSubmitting}
                                                            type="submit"
                                                            variant="contained"
                                                            className="button"
                                                        >
                                                            <span className="button-label">
                                                                {isLastStep ? "Place order" : "Next"}
                                                            </span>
                                                        </Button>
                                                        {isSubmitting && (
                                                            <CircularProgress
                                                                size={24}
                                                                className="buttonProgress"
                                                            />
                                                        )}
                                                    </div>
                                                </div>
                                            </Form>
                                        )}
                                    </Formik>
                                )}
                            </React.Fragment>
                        </Paper>
                    </Container>
                </AppLayout>
            </React.Fragment>
        </Wrapper>
    );
};

const Wrapper = styled.section`
  .MuiStepLabel-labelContainer span {
    font-size: 14px;
  }
  .MuiStepIcon-text {
    font-size: 12px;
  }
  .MuiToolbar-root {
    background-color: #1976d2;
  }  
  
  .MuiSvgIcon-root {
    color: #fff;
  }
  .stepper {
    padding: 3px 0 5px;
    background-color: #fff;
    display: flex;
    margin-top: 3rem;
    margin-bottom: 3rem;
  }

  .buttons {
    display: flex;
    justifycontent: flex-end;
  }

  .back-button {
    margin-top: 3rem;
    margin-right: 1rem;
  }
  .button {
    margin-top: 3rem;
  }
  .button-label {
    font-size: 12px;
  }

  .buttonProgress {
    position: absolute;
    margin-top: 50%;
    margin-left: 50%;
  }
`;

export default CheckoutPage;
