import { useEffect, useState } from 'react';

type Users = {
  id: number;
  name: string;
  email: string;
};

export default function LoadingUsers() {
  const [users, setUsers] = useState<Array<Users>>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getUsers() {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await res.json();
      setUsers(data);

      // slow simulation
      await new Promise((resolve) => setTimeout(resolve, 3000));

      setLoading(false);
    }
    getUsers();
  }, []);

  let content;
  if (loading) {
    content = <p>Loading...</p>;
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
      <h2>Loading Users</h2>
      {content}
    </div>
  );
}
