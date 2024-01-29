import React, { useState } from 'react';
import './Login.scss';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: email,  // Assuming your Flask backend expects 'username' instead of 'email'
          password: password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Login successful, you can handle the success here
        console.log('Login successful');
      } else {
        // Login failed, handle the error
        console.error(data.message);
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <div className="login-heading">
          <h2>Login</h2>
        </div>
        <form className="space-y-6" onSubmit={handleLogin}>
          <input type="hidden" name="remember" defaultValue="true" />
        
          <div className="form-input-group">
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="Email address"
              value={email}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="submit-button" type="submit">
            Sign In
          </button>
        </form>
        <div className="text-sm">
          Don't have an account? Register
        </div>
      </div>
    </div>
  );
};

export default Login;
