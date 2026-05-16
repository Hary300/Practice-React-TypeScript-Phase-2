import { useEffect, useState } from 'react';

export default function TodoDraft() {
  const [message, setMessage] = useState(() => {
    const saved = localStorage.getItem('message');
    return saved || '';
  });

  useEffect(() => {
    localStorage.setItem('message', message);
  }, [message]);

  return (
    <div>
      <h2>ToDo Draft</h2>
      <label htmlFor='message'>Message:</label>
      <textarea
        name='message'
        id='message'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder='Write your message...'
        className='px-4 py-2 rounded-2xl border'
        rows={5}
      ></textarea>

      {message && <p>{message}</p>}
    </div>
  );
}
