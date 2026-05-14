import { useEffect, useState } from 'react';

type Comments = {
  id: number;
  name: string;
  body: string;
};

export default function FetchComments() {
  const [comments, setComments] = useState<Array<Comments>>([]);

  useEffect(() => {
    async function getComments() {
      const res = await fetch('https://jsonplaceholder.typicode.com/comments');
      const data = await res.json();
      setComments(data);
    }

    getComments();
  }, []);

  return (
    <div>
      <h2>Fetch Comments</h2>
      <ol className='list-decimal ml-10'>
        {comments.map((comment) => (
          <li key={comment.id}>
            <p>Name: {comment.name}</p>
            <p>Comment: {comment.body}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
