import { useRef } from 'react';

export default function FocusInput() {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleFocus(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    inputRef.current?.focus();
  }

  return (
    <form>
      <h2>Focus Input</h2>

      <input
        type='text'
        placeholder='Write your name'
        className='px-4 py-2 rounded-2xl border'
        ref={inputRef}
      />
      <button onClick={handleFocus}>Focus</button>
    </form>
  );
}
