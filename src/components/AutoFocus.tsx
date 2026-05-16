import { useEffect, useRef } from 'react';

export default function AutoFocus() {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <form>
      <h2>Auto Focus</h2>
      <input
        type='text'
        placeholder='Write your favorite food...'
        className='px-4 py-2 rounded-2xl border'
        ref={inputRef}
      />
    </form>
  );
}
