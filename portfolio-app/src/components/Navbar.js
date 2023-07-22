import React from 'react';

const Navbar = ({ user, handleLogin, handleLogout }) => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span>PortfolioManager</span>
      </div>
      <div className="navbar-right">
        {user ? (
          <span>Welcome, {user.firstName}</span>
        ) : (
          <>
            <button onClick={handleLogin}>Login</button>
            <button>Signup</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
