import React, { useState } from 'react';
import axios from 'axios';
import './SignIn.css';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/auth/signin`, {
        email,
        password,
      });
      // Handle successful sign-in, e.g., store the token, redirect, etc.
      console.log('Sign in successful:', response.data);
    } catch (error) {
      // Handle error
      console.error('Error signing in:', error);
    }
  };

  return (
    <div className="signin-page">
      <h1>Welcome to GradMemoir</h1>
      <h4>Join the alumni community to share memories</h4>
      <form onSubmit={handleSignIn}>
        <label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Sign In</button>
        <hr />
        <p>or</p>
        <button>Sign in with Google</button>
        <button>Sign in with GitHub</button>
        <p>New here? <a href="/signup">Sign up now!</a></p>
      </form>
    </div>
  );
};

export default SignIn;
