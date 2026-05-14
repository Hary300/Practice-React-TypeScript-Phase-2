import { useState } from 'react';

export default function SelectFavoriteFood() {
  const [food, setFood] = useState('');

  return (
    <div>
      <h2>Select Your Favorite Food</h2>
      <select
        name='food'
        id='food'
        value={food}
        onChange={(e) => setFood(e.target.value)}
      >
        <option value='' disabled hidden>
          Select food
        </option>
        <option value='Nasi Goreng'>Nasi Goreng</option>
        <option value='Mie Ayam'>Mie Ayam</option>
        <option value='Bakso'>Bakso</option>
      </select>
      <p>My favorite food: {food}</p>
    </div>
  );
}
