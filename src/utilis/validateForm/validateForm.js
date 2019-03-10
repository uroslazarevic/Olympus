const validateForm = formValues => {
  const errors = {};

  if (!formValues.fullname) {
    errors.fullname = "Required";
  } else if (
    !/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g.test(formValues.fullname)
  ) {
    errors.fullname = "Please provide a valid fullname.";
  }

  if (!formValues.email) {
    errors.email = "Required";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formValues.email)
  ) {
    errors.email = "Please provide a valid email.";
  }

  if (!formValues.password) {
    errors.password = "Required";
  } else if (formValues.password.length < 8) {
    errors.password =
      "Please provide a valid password, must be atleast 8 char.";
  }

  return errors;
};

export default validateForm;
