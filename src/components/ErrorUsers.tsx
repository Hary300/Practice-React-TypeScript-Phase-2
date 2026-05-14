import { useEffect, useState } from 'react';

type Users = {
  id: number;
  name: string;
  email: string;
};

export default function ErrorUsers() {
  const [users, setUsers] = useState<Array<Users>>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function getUsers() {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();
        setUsers(data);
      } catch {
        setError('Failed to fetch users');
      } finally {
        setLoading(false);
      }
    }

    getUsers();
  }, []);

  let content;
  if (loading) {
    content = <p>Loading...</p>;
  } else if (error) {
    content = error;
  } else {
    content = (
      <ol className='list-decimal ml-10'>
        {users.map((user) => (
          <li key={user.id}>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
          </li>
        ))}
      </ol>
    );
  }

  return (
    <div>
      <h2>Error Users</h2>
      {content}
    </div>
  );
}
