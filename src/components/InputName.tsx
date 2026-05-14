import { useState } from 'react';

export default function InputName() {
  const [name, setName] = useState('');
  return (
    <div>
      <h2>InputName</h2>
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder='Write your name...'
        className='border rounded-2xl px-4 py-2'
      />
      <p className='h-5'>{name === '' ? '' : `Hello ${name}`}</p>
    </div>
  );
}
