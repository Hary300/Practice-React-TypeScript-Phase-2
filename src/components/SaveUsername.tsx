import { useEffect, useState } from 'react';

export default function SaveUserName() {
  const [username, setUsername] = useState(() => {
    const saved = localStorage.getItem('username');
    return saved ? saved : '';
  });

  useEffect(() => {
    localStorage.setItem('username', username);
  }, [username]);

  return (
    <div>
      <h2>Save Username</h2>
      <label htmlFor='username'>Username:</label>
      <input
        type='text'
        name='username'
        id='username'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder='Write your username...'
        className='px-4 py-2 rounded-2xl border'
      />
      <p>Username: {username}</p>
    </div>
  );
}
