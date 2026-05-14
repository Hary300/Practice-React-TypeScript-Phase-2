import { useState } from 'react';

export default function MultipleControlledInputs() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [gender, setGender] = useState('');

  return (
    <div className='flex flex-col gap-2'>
      <h2>Multiple Controlled Inputs</h2>
      {/* input name */}
      <label htmlFor='name'>Name: </label>
      <input
        type='text'
        id='name'
        value={name}
        placeholder='Write your name...'
        onChange={(e) => setName(e.target.value)}
        className='border rounded-2xl px-4 py-2'
      />
      {/* input message */}
      <label htmlFor='message'>Message: </label>
      <textarea
        name='message'
        id='message'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder='Write your message'
        className='border rounded-2xl px-4 py-2'
        rows={4}
      ></textarea>

      {/* input gender */}
      <label htmlFor='gender'>Gender: </label>
      <select
        name='gender'
        id='gender'
        value={gender}
        onChange={(e) => setGender(e.target.value)}
        className='border rounded-2xl px-4 py-2'
      >
        <option value='' disabled hidden>
          Choose gender...
        </option>
        <option value='Male'>Male</option>
        <option value='Female'>Female</option>
      </select>

      {/* UI */}
      <p>Name: {name}</p>
      <p>Message: {message}</p>
      <p>Gender: {gender}</p>
    </div>
  );
}
