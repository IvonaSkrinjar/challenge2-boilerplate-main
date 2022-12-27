export default {
  formId: "signinForm",
  formField: {      
    username: {
      name: "username",
      label: "Username*",
      requiredErrorMsg: "Username is required"
    },
    password: {
      name: "password",
      label: "Password*",
      requiredErrorMsg: "Password is required",
      invalidErrorMsg: "Password must be at least 5 characters"
    }
  }
};
