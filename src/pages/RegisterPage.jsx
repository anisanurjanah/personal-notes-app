import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../utils/network-data.js';
import InputRegister from '../components/InputRegister.jsx';
 
function RegisterPage() {
  const navigate = useNavigate();
 
  async function onRegisterHandler(user) {
    const { error } = await register(user);
    if (!error) {
      navigate('/');
    }
  }
 
  return (
    <section>
      <h2>Create your Note Account</h2>
      <InputRegister onSubmit={onRegisterHandler} />
      <p>Back to <Link to="/*">Login</Link></p>
    </section>
  )
}
 
export default RegisterPage;