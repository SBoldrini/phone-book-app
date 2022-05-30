import { useEffect, useState } from "react";
import { fetchForm } from "../helpers/fetch";

export const useFetchForm = ({formValues={}, validated=false}) => {

  const [state, setState] = useState({data:[], loading:false, error:null});
  
  useEffect(() => {

    if (validated) {
      setState({
        data: [],
        loading: true,
        error: null
      });

      fetchForm('/api/auth/login', formValues, 'POST')
        .then(resp => resp.json())
        .then(data => {
          setState({
            data,
            loading: false,
            error: null
          });
        })
        .catch(error => {
          console.log(`No se pudo enviar el formulario.\n Error: ${error}`);
          setState({
            data: [],
            loading: false,
            error: 'No se pudo enviar el formulario.'
          });
        });
    }

  }, [validated, formValues]);


  return state;
  
}