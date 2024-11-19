import React, { useState } from 'react';
import axios from 'axios';
import './SignUp.css';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/auth/signup`, {
        email,
        password,
      });
      // Handle successful sign-up, e.g., redirect to sign-in page
      console.log('Sign up successful:', response.data);
    } catch (error) {
      // Handle error
      console.error('Error signing up:', error);
    }
  };

  return (
    <div className="signup-page">
      <h1>Join GradMemoir</h1>
      <h4>Become a part of the alumni community and share your journey</h4>
      <form onSubmit={handleSignUp}>
        <label>
          Email
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Create Password
          <input
            type="password"
            placeholder="Create Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label>
          Confirm Password
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
        <button type="submit">Sign Up</button>
        <hr />
        <p>or</p>
        <button>Sign up with Google</button>
        <button>Sign up with GitHub</button>
        <p>Already have an account? <a href="/signin">Sign in now!</a></p>
      </form>
    </div>
  );
};

export default SignUp;
