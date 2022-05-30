const baseURL = process.env.REACT_APP_API_URL;


const fetchForm = (endpoint, data, method ='GET') => {

  const url = `${ baseURL }/${ endpoint }`;
  const user = localStorage.getItem('user') || '';

  if (method === 'GET') {
    return fetch(url, {
      method,
      headers: {
        'user': user
      }
    });
  } else {
    return fetch(url, {
      method,
      headers: {
        'Content-type': 'application/json',
        'user': user
      },
      body: JSON.stringify(data)
    });
  }
}


export {
  fetchForm
}


