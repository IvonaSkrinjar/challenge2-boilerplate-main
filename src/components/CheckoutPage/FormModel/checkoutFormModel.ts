export default {
    formId: "checkoutForm",
    formField: {
        firstName: {
            name: "firstName",
            label: "First name*",
            requiredErrorMsg: "First name is required"
        },
        lastName: {
            name: "lastName",
            label: "Last name*",
            requiredErrorMsg: "Last name is required"
        },
        email: {
            name: "email",
            label: "Email*",
            requiredErrorMsg: "Email is required",
            invalidErrorMsg: "Invalid email format"
        },
        address: {
            name: "address",
            label: "Address*",
            requiredErrorMsg: "Address is required"
        },       
        city: {
            name: "city",
            label: "City*",
            requiredErrorMsg: "City is required"
        },      
        zipcode: {
            name: "zipcode",
            label: "Zipcode*",
            requiredErrorMsg: "Zipcode is required",
            invalidErrorMsg: "Zipcode is not valid (e.g. 70000)"
        },
        country: {
            name: "country",
            label: "Country*",
            requiredErrorMsg: "Country is required"
        },       
        nameOnCard: {
            name: "nameOnCard",
            label: "Name on card*",
            requiredErrorMsg: "Name on card is required"
        },
        cardNumber: {
            name: "cardNumber",
            label: "Card number*",
            requiredErrorMsg: "Card number is required",
            invalidErrorMsg: "Card number is not valid (e.g. 1234123412341234)"
        },       
        cvv: {
            name: "cvv",
            label: "CVV*",
            requiredErrorMsg: "CVV is required",
            invalidErrorMsg: "CVV is invalid (e.g. 123)"
        },
        expiryDate: {
            name: "expiryDate",
            label: "Expiry date (MM/YY)*",
            requiredErrorMsg: "Expiry date is required",
            invalidErrorMsg: "Expiry date is not valid",
            invalidExpiryDateErrorMsg: "Invalid Expiration Date has past",
            invalidExpiryMonthErrorMsg: "Invalid Expiration Month"
        }
    }
};
