import { useEffect } from 'react';

export default function ToggleComponentChild() {
  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log('run...');
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <div>Counter</div>;
}
