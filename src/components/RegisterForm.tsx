import { useState } from 'react';

type Data = {
  name: string;
  email: string;
  password: string;
  gender: string;
};

const initialData: Data = {
  name: '',
  email: '',
  password: '',
  gender: '',
};

export default function RegisterForm() {
  const [formData, setFormData] = useState(initialData);
  const [submittedData, setSubmittedData] = useState<Data | null>(null);

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const name = event.target.name as keyof Data;

    setFormData((prev) => ({ ...prev, [name]: event.target.value }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSubmittedData(formData);

    setFormData(initialData);
  }

  return (
    <div className='flex flex-col gap-10 justify-center p-10'>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col gap-2 bg-white w-full max-w-100 p-10 rounded-2xl shadow-[0_0_5px_rgba(0,0,0,0.5)] m-auto'
      >
        <h2 className='mb-5 text-center'>Register Form</h2>

        <div className='input-container w-full max-w-100 flex flex-col gap-2 m-auto'>
          {/* name */}
          <div className='name flex justify-between items-center'>
            <label htmlFor='name'>Name: </label>
            <input
              type='text'
              name='name'
              id='name'
              value={formData.name}
              onChange={handleChange}
              placeholder='Write your name...'
              className='px-4 py-2 rounded-2xl shadow-[0_0_5px_rgba(0,0,0,0.5)]'
            />
          </div>

          {/* email */}
          <div className='email flex justify-between items-center'>
            <label htmlFor='email'>Email:</label>
            <input
              type='email'
              name='email'
              id='email'
              value={formData.email}
              onChange={handleChange}
              placeholder='Write your email...'
              className='px-4 py-2 rounded-2xl  shadow-[0_0_5px_rgba(0,0,0,0.5)]'
            />
          </div>

          {/* password */}
          <div className='password flex justify-between items-center'>
            <label htmlFor='password'>Password:</label>
            <input
              type='password'
              name='password'
              id='password'
              value={formData.password}
              onChange={handleChange}
              placeholder='Write your password...'
              className='px-4 py-2 rounded-2xl shadow-[0_0_5px_rgba(0,0,0,0.5)]'
            />
          </div>

          {/* gender */}
          <div className='gender flex justify-between items-center'>
            <label htmlFor='gender'>Gender:</label>
            <select
              name='gender'
              id='gender'
              value={formData.gender}
              onChange={handleChange}
              className='px-4 py-2 rounded-2xl shadow-[0_0_5px_rgba(0,0,0,0.5)]'
            >
              <option value='' disabled hidden>
                Choose your gender
              </option>
              <option value='Male'>Male</option>
              <option value='Female'>Female</option>
            </select>
          </div>

          {/* button */}
          <button
            type='submit'
            className='mt-5 px-4 py-1 rounded-2xl shadow-[0_0_2px_rgba(0,0,0,0.5)] cursor-pointer transition-shadow duration-300 active:shadow-none bg-blue-400 text-white'
          >
            Submit
          </button>
        </div>
      </form>

      {submittedData && (
        <div className='summary flex flex-col p-10 rounded-2xl shadow-[0_0_2px_rgba(0,0,0,0.5)]'>
          <h2>Summary</h2>
          <p>Name: {submittedData.name}</p>
          <p>Email: {submittedData.email}</p>
          <p>PassWord: {submittedData.password}</p>
          <p>Gender: {submittedData.gender}</p>
        </div>
      )}
    </div>
  );
}
