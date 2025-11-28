import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../utils/network-data.js';
import InputLogin from '../components/InputLogin.jsx';
 
function LoginPage({ loginSuccess, language }) {

  async function onLoginHandler({email, password}) {
    const { error, data } = await login({ email, password });
 
    if (!error) {
      loginSuccess(data);
    }
  }
 
  return (
    <section>
      <h2>{language === 'id' ? 'Lanjutkan ke Catatan Saya' : 'Continue to MyNotes'}</h2>
      <InputLogin onSubmit={onLoginHandler} language={language} />
      <p>{language === 'id' ? 'Buat Akun baru' : 'Create new Account'} <Link to="/register">{language === 'id' ? 'Disini' : 'Here'}</Link></p>
    </section>
  )
}
 
export default LoginPage;