import { useEffect, useState } from 'react';

export default function DynamicTitle() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count ${count}`;
  }, [count]);

  return (
    <div>
      <h2>Dynamic Title</h2>
      <button
        className='px-4 rounded-2xl border cursor-pointer'
        onClick={() => setCount((prev) => prev + 1)}
      >
        count
      </button>
    </div>
  );
}
