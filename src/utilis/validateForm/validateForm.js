const validateForm = (formValues) => {
  const errors = {};
  if (!formValues.username) {
    errors.username = "Required";
  } else if (
    !/^[a-zA-Z1-9]+(([',. -][a-zA-Z1-9])?[a-zA-Z1-9]*)*$/g.test(formValues.username) ||
    formValues.username.length < 3
  ) {
    errors.username = "Please provide a valid fullname.";
  }

  if (!formValues.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formValues.email)) {
    errors.email = "Please provide a valid email.";
  }

  if (!formValues.password) {
    errors.password = "Required";
  } else if (formValues.password.length < 4) {
    errors.password = "Please provide a valid password, must be atleast 4 char.";
  }

  return errors;
};

export default validateForm;
