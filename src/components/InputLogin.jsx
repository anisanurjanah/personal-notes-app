import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput.jsx';

function InputLogin({ onSubmit }) {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  function onSubmitHandler(e) {
    e.preventDefault();
    onSubmit({ email, password });
  }

  return (
    <form className="input-login" onSubmit={onSubmitHandler}>
      <label htmlFor="email">Email</label>
      <input type="email" id="email" value={email} onChange={onEmailChange} />
      <label htmlFor="password">Password</label>
      <input type="password" id="password" value={password} onChange={onPasswordChange} />
      <button type="submit">Login</button>
    </form>
  );
}

InputLogin.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default InputLogin;