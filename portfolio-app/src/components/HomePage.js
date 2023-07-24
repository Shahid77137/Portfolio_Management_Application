import React, { useState } from 'react';
import Navbar from './Navbar';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import ParentComponent from './ParentComponent';


const HomePage = () => {
  const [user, setUser] = useState(null);
  const [showSignup, setShowSignup] = useState(false);

  const handleLogin = () => {
    setShowSignup(false);
  };

  const handleSignup = () => {
    setShowSignup(true);
  };

  const handleLogout = async () => {
    try {
        const response = await axios.post('http://localhost:8000/user/logout', formData);
        if (response.status === 200) {
          setUser(null); // Set the user state to null to indicate that the user is logged out
        } else {
          // Handle logout failure (show error message, etc.)
          console.error('Logout failed:', response.data.message);
        }
      } catch (error) {
        console.error('Error during logout:', error);
      }
  // Implement the API call to handle logouthere 
    // setUser(null);
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
