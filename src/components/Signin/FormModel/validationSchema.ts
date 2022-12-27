import * as Yup from "yup";
import signinFormModel from "./signinFormModel";
const {
  formField: {
    username,
    password

  }
} = signinFormModel;

const signinValidationSchema =
    Yup.object().shape({

      [username.name]: Yup.string().required(`${username.requiredErrorMsg}`),
      [password.name]: Yup.string().required(`${password.requiredErrorMsg}`)
        .min(5, password.invalidErrorMsg)
    });

export default signinValidationSchema;

