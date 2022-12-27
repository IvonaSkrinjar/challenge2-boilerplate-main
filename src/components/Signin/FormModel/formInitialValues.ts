
import signinFormModel from "./signinFormModel";
const {
  formField: {     
    username,
    password        
  }
} = signinFormModel;

export default {   
  [username.name]: "",
  [password.name]: "",
};
