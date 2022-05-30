import { useState } from "react";


export const useValidateForm = () => {

  const [check, setCheck] = useState(false);
  const [validated, setValidated] = useState(false);

  const handleSubmit = (e) => {
 
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      e.stopPropagation();
    }

    setValidated(form.checkValidity());
    setCheck(true);
    e.preventDefault();
  }

  return {
    handleSubmit,
    check,
    validated
  };
};
