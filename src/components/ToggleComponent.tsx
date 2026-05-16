import { useState } from 'react';
import ToggleComponentChild from './ToggleComponentChild';

export default function ToggleComponent() {
  const [show, setShow] = useState(true);
  return (
    <div>
      <h2>Toggle Component</h2>
      {show && <ToggleComponentChild />}
      <button onClick={() => setShow((prev) => !prev)}>
        {show ? 'Hide' : 'Show'}
      </button>
    </div>
  );
}
