import { useEffect, useState } from 'react';

export default function TwoDependency() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  useEffect(() => {
    console.log('Ada perubahan');
  }, [count, text]);

  return (
    <div>
      <h2>useEffect with Two Dependencies </h2>
      <button
        className='px-4 rounded-2xl border '
        onClick={() => setCount((prev) => prev + 1)}
      >
        count {count}
      </button>

      <input
        type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder='Write something...'
        className='px-4 rounded-2xl border'
      />
      <p>{text}</p>
    </div>
  );
}
