import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../utils/network-data.js';
import InputRegister from '../components/InputRegister.jsx';
 
function RegisterPage({ language }) {
  const navigate = useNavigate();
 
  async function onRegisterHandler(user) {
    const { error } = await register(user);
    if (!error) {
      navigate('/login');
    }
  }
 
  return (
    <section>
      <h2>{language === 'id' ? 'Buat Akun Catatan kamu' : 'Create your Note Account'}</h2>
      <InputRegister onSubmit={onRegisterHandler} language={language} />
      <p>{language === 'id' ? 'Kembali ke' : 'Back to'} <Link to="/login">{language === 'id' ? 'Masuk' : 'Login'}</Link></p>
    </section>
  )
}
 
export default RegisterPage;