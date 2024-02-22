'use client';

import axios from 'axios';
import React, { useState } from 'react';
import toast from 'react-hot-toast';


const RegistrationPage: React.FC = () => {
  const [name, setName] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/registration', { name });

      if (response.status === 200) {
        toast.success('Name submitted successfully!');
        // Handle success, e.g., show a success message or redirect
      } else {
        toast.error('Failed to submit name.');
        // Handle error, e.g., show an error message
      }
    } catch (error) {
      toast.error('An error occurred');
      // Handle error, e.g., show an error message
    }
  };

  return (
    <div>
      <h1>Registration Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <button type="submit" className='bg-purple-500 p-5'>Submit</button>
      </form>
    </div>
  );
};

export default RegistrationPage;

