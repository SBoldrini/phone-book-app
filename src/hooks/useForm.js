import { useState } from 'react';

/**
 * 
 * @param {*} initialState 
 * @returns Devuelve un arreglo de valores, un función 'handleInputChange' que asigna a cada campo su valor y una función de 'reset'.
 */

export const useForm = ( initialState = {}) => {

  const [values, setValue] = useState(initialState);

  const reset = (newFormState = initialState) => {
    setValue(newFormState);
  }

  const handleInputChange = ({ target }) => {
    setValue({
      ...values,
      [target.name]: target.value,
    });
  }

  return [values, handleInputChange, reset];
  
}