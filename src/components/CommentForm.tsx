import { useState } from 'react';

export default function CommentForm() {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [submittedData, setSubmittedData] = useState({ name: '', comment: '' });

  function handleForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSubmittedData({ name, comment });
    setName('');
    setComment('');
  }
  return (
    <form onSubmit={handleForm}>
      <div className='nameInput'>
        <label htmlFor='name'>Name:</label>
        <input
          type='text'
          id='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Write your name...'
          className='px-4 py-2 rounded-2xl border'
        />
      </div>

      <div className='commentInput'>
        <label htmlFor='comment'>Comment:</label>
        <textarea
          name='comment'
          id='comment'
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder='Write your comment...'
          className='px-4 py-2 rounded-2xl border'
          rows={5}
        ></textarea>
      </div>
      <button type='submit' className='px-4 py-2 bg-blue-500 rounded-2xl'>
        Submit
      </button>

      <div className='container  p-2 border rounded-2xl'>
        <h2>Overview</h2>
        <div className='overview'>
          {submittedData.name && submittedData.comment ? (
            <>
              <p>Name: {submittedData.name}</p>
              <p>Comment: {submittedData.comment}</p>
            </>
          ) : (
            <p>Belum ada data dikirim</p>
          )}
        </div>
      </div>
    </form>
  );
}
