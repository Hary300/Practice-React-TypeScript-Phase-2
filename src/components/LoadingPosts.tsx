import { useEffect, useState } from 'react';

type Posts = {
  id: number;
  title: string;
};

export default function LoadingPosts() {
  const [posts, setPosts] = useState<Array<Posts>>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getPosts() {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await res.json();
      setPosts(data);

      // slow simulation
      await new Promise((resolve) => setTimeout(resolve, 3000));

      setLoading(false);
    }

    getPosts();
  }, []);

  let content;
  if (loading) {
    content = <p>Loading...</p>;
  } else {
    content = (
      <ol className='list-decimal ml-10'>
        {posts.map((post) => (
          <li key={post.id}>Post Title: {post.title}</li>
        ))}
      </ol>
    );
  }

  return (
    <div>
      <h2>Loading Posts</h2>
      {content}
    </div>
  );
}
