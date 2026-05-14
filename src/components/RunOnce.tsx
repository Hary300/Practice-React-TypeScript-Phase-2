import { useEffect } from 'react';

export default function RunOnce() {
  useEffect(() => {
    console.log('Component muncul');
  }, []);

  return <h1>Hello</h1>;
}
