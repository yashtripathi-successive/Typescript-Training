
import React, { useState } from 'react';

function UserForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = 'Name is required';
    if (!email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Email is invalid';
    if (!phone.trim()) newErrors.phone = 'Phone is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    onSubmit({ name, email, phone });
    setName('');
    setEmail('');
    setPhone('');
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div>
        <label htmlFor="name">Name:</label><br />
        <input
          id="name"
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email">Email:</label><br />
        <input
          id="email"
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="phone">Phone:</label><br />
        <input
          id="phone"
          type="tel"
          placeholder="Enter phone"
          value={phone}
          onChange={e => setPhone(e.target.value)}
        />
        {errors.phone && <p style={{ color: 'red' }}>{errors.phone}</p>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default UserForm;
