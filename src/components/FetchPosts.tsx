import { useEffect, useState } from 'react';

type Posts = {
  id: number;
  title: string;
};

export default function FetchPosts() {
  const [posts, setPosts] = useState<Array<Posts>>([]);

  useEffect(() => {
    async function getPosts() {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await res.json();
      setPosts(data);
    }
    getPosts();
  }, []);

  return (
    <div>
      <h2>Fetch Posts</h2>
      <ol className='list-decimal ml-10'>
        {posts.map((post) => (
          <li key={post.id}>Title Post: {post.title}</li>
        ))}
      </ol>
    </div>
  );
}
