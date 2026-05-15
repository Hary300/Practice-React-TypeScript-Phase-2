import { useState } from 'react';

type Data = {
  name: string;
  comment: string;
};

const initialData: Data = {
  name: '',
  comment: '',
};

export default function CommentFormValidation() {
  const [formData, setFormData] = useState(initialData);
  const [error, setError] = useState(initialData);

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const key = event.target.name as keyof Data;
    setFormData((prev) => ({ ...prev, [key]: event.target.value }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const newError: Data = {
      name: '',
      comment: '',
    };

    if (formData.name.trim() === '') {
      newError.name = 'Name cannot be empty';
    }

    if (formData.comment.trim() === '') {
      newError.comment = 'Comment cannot be empty';
    } else if (formData.comment.trim().length < 10) {
      newError.comment = 'At least 10 characters';
    }

    setError(newError);

    const isValid = newError.name === '' && newError.comment === '';

    if (!isValid) return;

    console.log('Data submitted successfully');

    setFormData(initialData);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='max-w-100 border rounded-2xl p-4 flex flex-col gap-2'
    >
      <h2>Comment Form Validation</h2>
      <div className='name'>
        <div className='flex justify-between'>
          <label htmlFor='name'>Name:</label>
          {error.name && <p className='text-red-500'>{error.name}</p>}
        </div>
        <input
          type='text'
          name='name'
          id='name'
          value={formData.name}
          onChange={handleChange}
          placeholder='Write your name'
          className={`border rounded-2xl px-4 py-2 w-full ${error.name ? 'border-red-500' : ''}`}
        />
      </div>

      <div className='comment'>
        <div className='flex justify-between'>
          <label htmlFor='comment'>Comment:</label>
          {error.comment && <p className='text-red-500'>{error.comment}</p>}
        </div>
        <textarea
          name='comment'
          id='comment'
          value={formData.comment}
          onChange={handleChange}
          placeholder='Write your comment...'
          rows={5}
          className={`border rounded-2xl px-4 py-2 w-full ${error.comment ? 'border-red-500' : ''}`}
        ></textarea>
      </div>

      <button
        type='submit'
        className=' rounded-2xl px-4 py-2 w-full cursor-pointer bg-blue-400 text-white'
      >
        Submit
      </button>
    </form>
  );
}
