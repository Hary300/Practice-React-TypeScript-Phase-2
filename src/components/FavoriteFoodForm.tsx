import { useState } from 'react';

export default function FavoriteFoodForm() {
  const [name, setName] = useState('');
  const [food, setFood] = useState('');

  const [submittedData, setSubmittedData] = useState({ name: '', food: '' });

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSubmittedData({ name: name, food: food });

    setName('');
    setFood('');
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Favorite Food</h2>
        <div>
          <label htmlFor='name'>Name: </label>
          <input
            type='text'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Write your name...'
            className='px-4 py-2 rounded-2xl border'
          />
        </div>

        <div>
          <label htmlFor='food'>Favorite food: </label>
          <select
            name='food'
            id='food'
            value={food}
            onChange={(e) => setFood(e.target.value)}
            className='px-4 py-2 rounded-2xl border'
          >
            <option value='' disabled hidden>
              Choose your favorite food
            </option>
            <option value='Burger'>Burger</option>
            <option value='Pizza'>Pizza</option>
            <option value='Hotdog'>Hotdog</option>
          </select>
        </div>

        <button
          type='submit'
          className='px-4 py-2 rounded-2xl border cursor-pointer'
        >
          Submit
        </button>
      </form>
      <p className='overview'>
        {submittedData.name && submittedData.food
          ? `Hello ${submittedData.name}, Your favorite food is ${submittedData.food}`
          : ''}
      </p>
    </>
  );
}
