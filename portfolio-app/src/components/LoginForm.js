// import React, { useState } from 'react';

// const LoginForm = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     // Implement the API call to handle login here
// //   };

// const handleSubmit = (e) => {
//     e.preventDefault();
//     fetch('/user/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(formData),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.message === 'Logged In SuccessFully') {
//           setUser({ email: formData.email });
//           setShowSignup(false);
//         } else {
//           // Handle errors or display success message
//           console.error('Logged In failed:', response.data.message);
//         }
//       })
//       .catch((error) => {
//         console.error('Error:', error);
//         // Handle errors
//       });
//   };
  

//   return (
//     <div className="login-form">
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={handleChange}
//           required
//         />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default LoginForm;

import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = ({ setUser, setShowSignup }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/user/login', formData);
      if (response.status === 200) {
        setUser(response.data); // Assuming the API returns the user data upon successful login
      } else {
        // Handle login failure (show error message, etc.)
        console.error('Login failed:', response.data.message);
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
        <p>
          Don't have an account?{' '}
          <span onClick={() => setShowSignup(true)}>Sign up</span>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
