import { useState } from 'react';

export default function SelectFormValidation() {
  const [role, setRole] = useState('');
  const [error, setError] = useState('');
  const [greet, setGreet] = useState(false);

  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setRole(event.target.value);
    setGreet(false);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (role === '') {
      setError('Select role, please');
      return;
    }
    setError('');
    setGreet(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='max-w-100 border rounded-2xl p-4 flex flex-col gap-4'
    >
      <h2>Select Form Validation</h2>
      <div className='flex justify-between'>
        <label htmlFor='role'>Role:</label>
        {error && <p>{error}</p>}
      </div>
      <select
        name='role'
        id='role'
        value={role}
        onChange={handleChange}
        className='px-4 py-2 border rounded-2xl'
      >
        <option value='' disabled hidden>
          Choose Role
        </option>
        <option value='Admin'>Admin</option>
        <option value='User'>User</option>
      </select>

      <p className='h-5'>{greet && `Welcome ${role}`}</p>
      <button
        type='submit'
        className='py-2 px-4 bg-blue-400 rounded-2xl text-white cursor-pointer'
      >
        Test
      </button>
    </form>
  );
}
