import React, { useState } from 'react';
import axios from 'axios';
import './Register.scss';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const history = useHistory()

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://occurances-digital-book.onrender.com/register', {
        username,
        email,
        password,
      });

      setMessage('Registration successful');
      setError('');
      console.log('Registration successful', response.data);

      console.log('About to navigate to /login');
      history.push('/login')
    } catch (error) {
      setMessage('');
      setError('Registration failed. Please check your details and try again.');
      console.error('Registration failed', error);
    }
  };

  return (
    <div className="register-container">
      <div className="register-form">
        <div className="register-heading">
          <h2>Register</h2>
        </div>
        {message && <div className="success-message">{message}</div>}
        {error && <div className="error-message">{error}</div>}
        <form className="space-y-6" onSubmit={handleRegister}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="form-input-group">
            <input
              id="username"
              name="username"
              type="text"
              autoComplete="username"
              required
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-input-group">
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-input-group">
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="submit-button" type="submit">
            Register
          </button>
        </form>
        <div className="text-sm login-link">
          <a href="/login">Already have an account? Login</a>
        </div>
      </div>
    </div>
  );
};

export default Register;
