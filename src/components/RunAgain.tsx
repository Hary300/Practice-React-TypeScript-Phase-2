import { useEffect, useState } from 'react';

export default function RunAgain() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('Effect berjalan');
  });
  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Count {count}
      </button>
    </div>
  );
}
