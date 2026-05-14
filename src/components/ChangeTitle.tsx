import { useEffect } from 'react';

export default function ChangeTitle() {
  useEffect(() => {
    document.title = 'Counter App';
  }, []);
  return <h1>Hello</h1>;
}
