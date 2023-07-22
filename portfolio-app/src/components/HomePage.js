import React, { useState } from 'react';
import Navbar from './Navbar';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';

const HomePage = () => {
  const [user, setUser] = useState(null);
  const [showSignup, setShowSignup] = useState(false);

  const handleLogin = () => {
    setShowSignup(false);
  };

  const handleSignup = () => {
    setShowSignup(true);
  };

  const handleLogout = () => {
    // Implement the API call to handle logout here
    setUser(null);
  };

  return (
    <div className="home-page">
      <Navbar user={user} handleLogin={handleLogin} handleLogout={handleLogout} />
      {showSignup ? (
        <SignupForm />
      ) : (
        <LoginForm />
      )}
    </div>
  );
};

export default HomePage;
