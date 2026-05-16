import { useRef } from 'react';

export default function ClearInput() {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (inputRef.current) {
      inputRef.current.value = '';
      inputRef.current.focus();
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Write your favorite drink...'
        className='px-4 py-2 rounded-2xl border'
        ref={inputRef}
      />
      <button type='submit'>Clear</button>
    </form>
  );
}
