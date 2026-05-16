import { useEffect, useState } from 'react';
import SaveUserName from './components/SaveUsername';
import DarkModeToggleButton from './components/DarkModeToggleButton';
import TodoDraft from './components/TodoDraft';

function App() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('isDark');
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    const root = document.documentElement;

    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    localStorage.setItem('isDark', JSON.stringify(isDark));
  }, [isDark]);

  return (
    <div className='min-h-screen bg-white dark:bg-black dark:text-white'>
      <DarkModeToggleButton isDark={isDark} setIsDark={setIsDark} />
      <SaveUserName />
      <TodoDraft />
    </div>
  );
}

export default App;
