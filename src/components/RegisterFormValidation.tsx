import { useState } from 'react';

type Data = {
  username: string;
  email: string;
  password: string;
};

const initialData: Data = {
  username: '',
  email: '',
  password: '',
};

export default function RegisterFormValidation() {
  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState(initialData);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const newError: Data = {
      username: '',
      email: '',
      password: '',
    };

    if (formData.username.trim() === '') {
      newError.username = 'Username cannot be empty';
    }

    if (formData.email.trim() === '') {
      newError.email = 'Email cannot be empty';
    } else if (!formData.email.includes('@')) {
      newError.email = 'Email must have @';
    }

    if (formData.password.length < 8) {
      newError.password = 'Password is too short';
    }

    setErrors(newError);

    const isValid =
      newError.username === '' &&
      newError.email === '' &&
      newError.password === '';

    if (!isValid) return;

    console.log('Data submitted successfully');
    setFormData(initialData);
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const key = event.target.name as keyof Data;

    setFormData((prev) => ({ ...prev, [key]: event.target.value }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2> Register Form Validation</h2>
      <div className='username'>
        <div className='flex justify-between'>
          <label htmlFor='username'>Username:</label>
          {errors.username && <p>{errors.username}</p>}
        </div>
        <input
          type='text'
          name='username'
          id='username'
          value={formData.username}
          onChange={handleChange}
          placeholder='Write your username...'
        />
      </div>

      <div className='email'>
        <div className='flex justify-between'>
          <label htmlFor='email'>Email:</label>
          {errors.email && <p>{errors.email}</p>}
        </div>
        <input
          type='text'
          name='email'
          id='email'
          value={formData.email}
          onChange={handleChange}
          placeholder='Write your email...'
        />
      </div>

      <div className='password'>
        <div
          className='flex
           justify-between'
        >
          <label htmlFor='password'>Password:</label>
          {errors.password && <p>{errors.password}</p>}
        </div>
        <input
          type='password'
          name='password'
          id='password'
          value={formData.password}
          onChange={handleChange}
          placeholder='Write your password...'
        />
      </div>

      <button type='submit'>Login</button>
    </form>
  );
}
