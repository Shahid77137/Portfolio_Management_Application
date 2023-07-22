// import React, { useState } from 'react';
// import axios from 'axios'; // Import Axios to make API requests

// const SignupForm = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     role: 'Manager',
//     about: '',
//     email: '',
//     password: '',
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };
// /*
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // Implement the API call to handle signup here
//       const response = await axios.post('/user/signup', formData);
//       // Handle the API response
//       if (response.status === 200) {
//         // Signup successful, do something (e.g., show a success message)
//         console.log('Signup successful:', response.data);
//       } else {
//         // Signup failed, show an error message
//         console.error('Signup failed:', response.data.message);
//       }
//     } catch (error) {
//       // Handle any errors that occurred during the API call
//       console.error('Error during signup:', error);
//     }
//   };
// */
// const handleSubmit = (e) => {
//     e.preventDefault();
//     fetch('/user/signup', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(formData),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.message === 'SignUp SuccessFully') {
//           setUser(data);
//           setShowSignup(false);
//         } else {
//           // Handle errors or display success message
//           console.error('Signup failed:', response.data.message);
//         }
//       })
//       .catch((error) => {
//         console.error('Error:', error);
//         // Handle errors
//         console.error('Error during signup:', error);
//       });
//   };
  


//   return (
//     <div className="signup-form">
//       <h2>Signup</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="firstName"
//           placeholder="First Name"
//           value={formData.firstName}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="text"
//           name="lastName"
//           placeholder="Last Name"
//           value={formData.lastName}
//           onChange={handleChange}
//           required
//         />
//         <select name="role" value={formData.role} onChange={handleChange}>
//           <option value="Manager">Manager</option>
//           <option value="ADMIN">Admin</option>
//         </select>
//         <textarea
//           name="about"
//           placeholder="About"
//           value={formData.about}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="email"
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
//         <button type="submit">Signup</button>
//       </form>
//     </div>
//   );
// };

// export default SignupForm;

import React, { useState } from 'react';
import axios from 'axios';

const SignupForm = ({ setUser, setShowSignup }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    role: 'Manager',
    about: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/user/signup', formData);
      if (response.status === 200) {
        setUser(response.data); // Assuming the API returns the user data upon successful signup
      } else {
        // Handle signup failure (show error message, etc.)
        console.error('Signup failed:', response.data.message);
      }
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };

  return (
    <div className="signup-form">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        <select name="role" value={formData.role} onChange={handleChange}>
          <option value="Manager">Manager</option>
          <option value="ADMIN">Admin</option>
        </select>
        <textarea
          name="about"
          placeholder="About"
          value={formData.about}
          onChange={handleChange}
          required
        />
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
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default SignupForm;
