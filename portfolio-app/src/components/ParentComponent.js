import React, { useState } from 'react';
import LoginForm from './LoginForm';

const ParentComponent = () => {
  const [showSignup, setShowSignup] = useState(false);
  const [user, setUser] = useState(null); // Define the user state

  // Function to handle setting the user data after successful login
  const handleLogin = (userData) => {
    setUser(userData);
    setShowSignup(false);
  };

  return (
    <div>
      {/* Other components */}
      {user ? (
        // If the user is logged in, show a welcome message or any other component
        <h2>Welcome, {user.email}</h2>
      ) : (
        // If the user is not logged in, show the login form
        <LoginForm setUser={handleLogin} setShowSignup={setShowSignup} />
      )}
      {/* Other components */}
    </div>
  );
};

export default ParentComponent;
