import React, { useState } from 'react';
import './Login.scss';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Login = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const history = useHistory()

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://occurances-digital-book.onrender.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email, 
          // username: username, 
          password: password,
        }),
      });

      const data = await response.json();
      console.log(data.user_id);
      if (response.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('username', data.username);
        localStorage.setItem('email', data.email);
        localStorage.setItem('role', data.role);
  
        console.log('Login successful');
        setError('');
        setSuccessMessage('Login successful. Redirecting to main page...');

        setTimeout(() => {
          history.push('/main');
        }, 2000);
      } else {
        setSuccessMessage('');
        setError(data.message);      }
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
        {error && <div className="error-message">{error}</div>}
        {successMessage && <div className="success-message">{successMessage}</div>}
          <input type="hidden" name="remember" defaultValue="true" />
        
          <div className="form-input-group">
            <input
              id="email-address"
              name="email"
              type="text"
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
