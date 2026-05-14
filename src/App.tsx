import FetchComments from './components/FetchComments';
import FetchPosts from './components/FetchPosts';
import FetchUsers from './components/FetchUsers';

function App() {
  return (
    <>
      <FetchPosts />
      <FetchUsers />
      <FetchComments />
    </>
  );
}

export default App;
