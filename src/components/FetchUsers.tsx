import { useEffect, useState } from 'react';

type Users = {
  id: number;
  name: string;
  email: string;
};

export default function FetchUsers() {
  const [users, setUsers] = useState<Array<Users>>([]);

  useEffect(() => {
    async function getUsers() {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await res.json();
      setUsers(data);
    }

    getUsers();
  }, []);

  return (
    <div>
      <h2>Fetch Users</h2>
      <ol className='list-decimal ml-10'>
        {users.map((user) => (
          <li key={user.id}>
            Name: {user.name}. Email: {user.email}
          </li>
        ))}
      </ol>
    </div>
  );
}
