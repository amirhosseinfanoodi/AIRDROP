import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './major.css';

export default function Major()
{
  const [submittedValue, setSubmittedValue] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    const input = document.getElementById('value');
    const price = parseFloat(input.value) * 0.00007;

    setSubmittedValue(price > 1 ? Math.ceil(price) : 0);
  }

  return (
    <div>
    {submittedValue === null ? (
        <div id='container' className='major-1 mx-auto flex flex-col items-center'>
          <form id='form' onSubmit={handleSubmit}>
            <input
              className='bg-amber-200 text-amber-600 border-2 border-gray-400 p-3 px-3 rounded-xl w-[17rem] mt-[70%] focus:border-gray-600 text-center'
              type='number'
              id='value'
              placeholder='مقدار توکن MAJOR خود را وارد کنید'
              min='1'
              required
            />
            <br />
            <button type='submit' className='bg-amber-200 text-amber-600 rounded-lg mt-6 px-6 text-center p-1'>
              تخمین قیمت
            </button>
          </form>
        </div>
      ) : (
        <div id='container' className='major-2 mx-auto flex flex-col items-center'>
          <p className='bg-amber-100 text-amber-700 rounded-lg px-6 text-center p-5 custom-button-text mt-[25rem]'>
            {submittedValue} دلار
          </p>
          <Link to='/' className='custom-button'>
            <p className='bg-green-500 text-amber-700 rounded-lg mt-2 px-6 text-center p-3 custom-button-text'>
              بازگشت
            </p>
          </Link>
        </div>
      )}
    </div>
  );
}