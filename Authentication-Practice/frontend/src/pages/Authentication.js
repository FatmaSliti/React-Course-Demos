import React from 'react'
import AuthForm from '../components/AuthForm'
import { json, redirect } from 'react-router-dom'

const AuthenticationPage = () => {
  return <AuthForm />
}

export default AuthenticationPage

export async function action({ request, params }) { //triggered when the AuthForm is submitted
  const searchParams = new URL(request.url).searchParams; //because we can't use the useSearchParams hook in a function
  const mode = searchParams.get('mode') || 'login'; // per default login

  if (mode !== 'login' && mode !== 'signup') {
    throw json({ message: 'Unsupported mode.' }, { status: 422 })
  }

  const data = await request.formData();

  const authData = {
    email: data.get('email'),
    password: data.get('password')
  }

  const response = await fetch('http://localhost:8080/' + mode, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(authData)
  });

  if (response.status === 422 || response.status === 401) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: 'Could not authenticate user.' }, { status: 500 })
  }

  //manage that token
  //in the backend the function responsible for authentication returns a response that contains a token 
  const resData = await response.json();
  const token = resData.token;
  //The response data contains the token under a token key 
  // because in the backend a token is created and sent to the frontend
  //now we must store it so that we can use it (we can store it in memory / in a cookie / the very simple one is to store it in the local storage)
  localStorage.setItem('token', token) //===> TOKEN STORED

  //to ensure that we respect the expiration date
  const expiration = new Date();
  expiration.setHours(expiration.getHours() + 1);
  localStorage.setItem('expiration', expiration.toISOString());

  return redirect('/');
}
