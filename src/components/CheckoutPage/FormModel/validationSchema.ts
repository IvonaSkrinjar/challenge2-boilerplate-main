import * as Yup from "yup";
import checkoutFormModel from "./checkoutFormModel";
const {
    formField: {
        firstName,
        lastName,
        email,
        address,
        city,
        zipcode,
        country,
        nameOnCard,
        cardNumber,
        cvv,
        expiryDate
    }
} = checkoutFormModel;

const visaRegEx = /^(?<!\d)\d{16}(?!\d)|(?<!\d[ _-])(?<!\d)\d{4}(?:[_ -]\d{4}){3}(?![_ -]?\d)$/;
const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
const cvvRegEx = /^[0-9]{3}$/;

export default [
    Yup.object().shape({
        [firstName.name]: Yup.string().required(`${firstName.requiredErrorMsg}`),
        [lastName.name]: Yup.string().required(`${lastName.requiredErrorMsg}`),
        [email.name]: Yup.string().required(`${email.requiredErrorMsg}`)
            .matches(emailRegEx, email.invalidErrorMsg), 
        [address.name]: Yup.string().required(`${address.requiredErrorMsg}`),
        [city.name]: Yup.string()
            .nullable()
            .required(`${city.requiredErrorMsg}`),
        [zipcode.name]: Yup.string()
            .required(`${zipcode.requiredErrorMsg}`),
        [country.name]: Yup.string()
            .nullable()
            .required(`${country.requiredErrorMsg}`)
    }),
    Yup.object().shape({
        [nameOnCard.name]: Yup.string().required(`${nameOnCard.requiredErrorMsg}`),
        [cardNumber.name]: Yup.string()
            .required(`${cardNumber.requiredErrorMsg}`)
            .matches(visaRegEx, cardNumber.invalidErrorMsg),      
        [cvv.name]: Yup.string()
            .required(`${cvv.requiredErrorMsg}`)
            .matches(cvvRegEx, cvv.invalidErrorMsg),
        [expiryDate.name]: Yup.string()
            .required(`${expiryDate.requiredErrorMsg}`)
            .matches(
                /([0-9]{2})\/([0-9]{2})/,
                expiryDate.invalidErrorMsg
            )
            .test(
                "test-credit-card-expiration-date",
                expiryDate.invalidExpiryDateErrorMsg,
                expirationDate => {
                    if (!expirationDate) {
                        return false;
                    }

                    const today = new Date();
                    const monthToday = today.getMonth() + 1;
                    const yearToday = today
                        .getFullYear()
                        .toString()
                        .slice(-2);

                    const [expMonth, expYear] = expirationDate.split("/");

                    if (Number(expYear) < Number(yearToday)) {
                        return false;
                    } else if (
                        Number(expMonth) < monthToday &&
                        Number(expYear) <= Number(yearToday)
                    ) {
                        return false;
                    }

                    return true;
                }
            )
            .test(
                "test-credit-card-expiration-date",
                expiryDate.invalidExpiryMonthErrorMsg,
                expirationDate => {
                    if (!expirationDate) {
                        return false;
                    }
                   
                    const [expMonth] = expirationDate.split("/");

                    if (Number(expMonth) > 12) {
                        return false;
                    }

                    return true;
                }
            )     
    })
];
