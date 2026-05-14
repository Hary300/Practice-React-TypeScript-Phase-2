import { useEffect, useState } from 'react';

type Posts = {
  id: number;
  title: string;
  body: string;
};

export default function ErrorPosts() {
  const [posts, setPosts] = useState<Array<Posts>>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function getPosts() {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await res.json();
        setPosts(data);
      } catch {
        setError('Failed to fetch posts');
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
