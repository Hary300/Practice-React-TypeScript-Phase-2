import { useEffect, useState } from 'react';

type Posts = {
  id: number;
  title: string;
  body: string;
};

export default function ProperErrorPosts() {
  const [posts, setPosts] = useState<Array<Posts>>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function getPosts() {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/poss');

        if (!res.ok) {
          // style 1
          // throw new Error();

          // style 2
          throw new Error(`Error ${res.status}`);
        }

        const data = await res.json();
        setPosts(data);
      } catch (err) {
        // style 1
        // setError('Failed to fetch posts');

        // style 2
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('an unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    }

    getPosts();
  }, []);

  let content;

  if (loading) {
    content = <p>Loading posts...</p>;
  } else if (error) {
    content = <p>{error}</p>;
  } else {
    content = (
      <ol className='list-decimal ml-10'>
        {posts.map((post) => (
          <li key={post.id}>
            <p>Title: {post.title}</p>
            <p>Post: {post.body}</p>
          </li>
        ))}
      </ol>
    );
  }
  return (
    <div>
      <h2>Error Posts</h2>
      {content}
    </div>
  );
}
