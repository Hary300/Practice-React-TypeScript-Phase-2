import { useState } from 'react';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(`Email: ${email}. Password: ${password}`);

    setEmail('');
    setPassword('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='email'>
        <label htmlFor='email'>Email: </label>
        <input
          id='email'
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Write your email...'
          className='px-4 py-2 border rounded-2xl'
        />
      </div>

      <div className='password'>
        <label htmlFor='password'>Password: </label>
        <input
          id='password'
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Write your password...'
          className='px-4 py-2 border rounded-2xl'
        />
      </div>

      <button
        type='submit'
        className='bg-blue-400 py-2 rounded-2xl px-4 cursor-pointer'
      >
        Submit
      </button>
    </form>
  );
}
