import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Register.scss';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Get the navigate function

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:5000/register', {
        username,
        email,
        password,
      });

      // Handle success
      console.log('Registration successful', response.data);

      // Redirect to login page after successful registration
      console.log('About to navigate to /login');
      navigate('/login');
    } catch (error) {
      // Handle error
      console.error('Registration failed', error);
    }
  };

  return (
    <div className="register-container">
      <div className="register-form">
        <div className="register-heading">
          <h2>Register</h2>
        </div>
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
