import { useEffect, useState } from 'react';

export default function CountDependency() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('count berubah');
  }, [count]);

  return (
    <div>
      <h2>useEffect with One Dependency </h2>
      <p>{count}</p>
      <button
        className='px-4 rounded-2xl border cursor-pointer'
        onClick={() => setCount((prev) => prev + 1)}
      >
        Count
      </button>
    </div>
  );
}
