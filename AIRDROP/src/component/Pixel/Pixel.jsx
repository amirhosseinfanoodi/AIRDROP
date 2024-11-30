import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './xempire.css';

export default function Pixel() {
  const [submittedValue, setSubmittedValue] = useState(null);
  const [xProfit, setXProfit] = useState('');
  const [refrral, setRefrral] = useState('');

  function handleSubmit(event)
  {
    event.preventDefault();
    const rate = 45 / 80_000_000_000;

    const profit = parseFloat(xProfit.replace(/,/g, ''));
    const referralValue = parseFloat(refrral.replace(/,/g, ''));

    var price = profit * rate;
    price += referralValue * 500_000_000 * rate;

    const formattedPrice = price > 1 ? Math.ceil(price).toLocaleString() : 0;
    setSubmittedValue(formattedPrice);
  }

  function formatNumber(value)
  {
    const cleanedValue = value.replace(/\D/g, '');
    return cleanedValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  return (
    <div>
      {submittedValue === null ? (
        <div id='container' className='xempire-1 mx-auto flex flex-col items-center'>
          <form id='form' onSubmit={handleSubmit}>
            <input
              className='mt-[17rem] bg-gradient-to-r from-gray-900 via-sky-800 to-gray-900 text-purple-300 border-2 border-gray-400 p-3 px-3 rounded-xl w-[17rem] focus:border-gray-600 text-center'
              id='xprofit'
              type='text'
              value={xProfit}
              onChange={(event) => setXProfit(formatNumber(event.target.value))}
              placeholder='تعداد توکن pixel خود را بنویسید'
              required
            />
            <br />
       
            <br />
            <button type='submit' className='bg-amber-200 text-amber-600 rounded-lg mt-2 px-6 text-center p-1'>
              تخمین قیمت
            </button>
          </form>
        </div>
      ) : (
        <div id='container' className='xempire-2 mx-auto flex flex-col items-center'>

          <p  className='text-white  mt-[18rem] w-70 bg-slate-600 p-4 rounded-xl'>
            تخمین قیمت با موفقیت انجام شد
          </p>

          <p className='bg-amber-200 text-amber-700 rounded-lg px-6 text-center p-5 custom-button-text mt-9'>
            {submittedValue} دلار
          </p>
          <Link to='/'>
            <p className='bg-green-500 text-gray-900 rounded-lg mt-3 px-6 text-center p-1'>بازگشت</p>
          </Link>
        </div>
      )}
    </div>
  );
}
