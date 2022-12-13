
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

export default {
    [firstName.name]: "",
    [lastName.name]: "",
    [email.name]: "",
    [address.name]: "",
    [city.name]: "",
    [zipcode.name]: "",
    [country.name]: "",
    [nameOnCard.name]: "",
    [cardNumber.name]: "",
    [cvv.name]: "",
    [expiryDate.name]: ""
};
