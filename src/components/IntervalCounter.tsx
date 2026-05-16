import { useEffect, useState } from 'react';

export default function IntervalCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => setCount((prev) => prev + 1), 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <h2>Interval Counter</h2>
      <p>count {count}</p>
    </div>
  );
}
