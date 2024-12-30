import React, { useState } from 'react';

const FormPage = () => {
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    password: '',
    role: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    // Add your logic here to send formData to the backend or perform other actions.
  };

  return (
    <div
      style={{
        maxWidth: '400px',
        margin: '0 auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
      }}
    >
      <h2 style={{ textAlign: 'center', color: '#333', marginBottom: '20px' }}>User Form</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label
            htmlFor="userName"
            style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', color: '#555' }}
          >
            User Name
          </label>
          <input
            type="text"
            id="userName"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
            placeholder="Enter your name"
            style={{
              width: '100%',
              padding: '8px',
              borderRadius: '4px',
              border: '1px solid #ccc',
              boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.1)',
            }}
            required
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label
            htmlFor="email"
            style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', color: '#555' }}
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            style={{
              width: '100%',
              padding: '8px',
              borderRadius: '4px',
              border: '1px solid #ccc',
              boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.1)',
            }}
            required
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label
            htmlFor="password"
            style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', color: '#555' }}
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            style={{
              width: '100%',
              padding: '8px',
              borderRadius: '4px',
              border: '1px solid #ccc',
              boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.1)',
            }}
            required
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label
            htmlFor="role"
            style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', color: '#555' }}
          >
            Role
          </label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '8px',
              borderRadius: '4px',
              border: '1px solid #ccc',
              boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.1)',
              backgroundColor: '#f9f9f9',
            }}
            required
          >
            <option value="">Select Role</option>
            <option value="Admin">Admin</option>
            <option value="Super_Admin">Super_Admin</option>
            <option value="User">User</option>
          </select>
        </div>

        <button
          type="submit"
          style={{
            width: '100%',
            padding: '10px',
            borderRadius: '4px',
            border: 'none',
            backgroundColor: '#007bff',
            color: '#fff',
            fontWeight: 'bold',
            fontSize: '16px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            cursor: 'pointer',
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormPage;