import { useEffect } from 'react';

export default function ResizeListener() {
  useEffect(() => {
    function handleResize() {
      console.log(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <h2>Resize Listener</h2>
    </div>
  );
}
