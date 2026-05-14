import { useState } from 'react';

export default function TextareaBio() {
  const [message, setMessage] = useState('');
  return (
    <div>
      <h2>Input Message</h2>
      <textarea
        name='message'
        id='message'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder='Write your message...'
        className='border rounded-2xl p-4'
        rows={4}
      />
      <p>Message: {message}</p>
    </div>
  );
}
