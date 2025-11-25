import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../utils/network-data.js';
import InputLogin from '../components/InputLogin.jsx';
 
function LoginPage({ loginSuccess }) {

  async function onLoginHandler({email, password}) {
    const { error, data } = await login({ email, password });
 
    if (!error) {
      loginSuccess(data);
    }
  }
 
  return (
    <section>
      <h2>Continue to MyNotes</h2>
      <InputLogin onSubmit={onLoginHandler} />
      <p>Create new Account <Link to="/register">Here</Link></p>
    </section>
  )
}
 
export default LoginPage;