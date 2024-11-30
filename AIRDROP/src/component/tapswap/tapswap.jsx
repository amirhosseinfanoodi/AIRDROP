import React, {useState} from 'react'
import './tapswap.css'
import { Link } from 'react-router-dom'

export default function Tapswap()
{
  const [submitedValue, setSubmitedValue] = useState(null);

  function handleSubmit(event)
  {
    event.preventDefault();

    const coinInput = document.getElementById('coin');
    const profitInput = document.getElementById('profit');
    const cubeInput = document.getElementById('cube');

    const coinPrice = parseFloat(coinInput.value) * 0.00000006;
    const profitPrice = parseFloat(profitInput.value) * 0.0003;
    const cubePrice = parseFloat(cubeInput.value) * 0.00024;
    const price = coinPrice + profitPrice + cubePrice;

    setSubmitedValue(price > 1 ? Math.ceil(price) : 0);
  }

  return (
    <div>
      {submitedValue === null ? (

        <div id='container' className='tapswap-1 mx-auto flex flex-col items-center'>

          <form id='form' onSubmit={handleSubmit}>

            <input className='bg-gradient-to-tl from-purple-900 from-30% to-purple-800 text-purple-300 border-2 border-gray-400 p-3 px-3 rounded-xl w-[17rem] mt-[65%] focus:border-gray-600 text-center' id='coin' type='number' placeholder='تعداد سکه های خود را وارد کنید' min='1' required />
            <br></br>
            <input className='bg-gradient-to-tl from-purple-900 from-30% to-purple-800 text-purple-300 border-2 border-gray-400 p-3 px-3 rounded-xl w-[17rem] mt-2 focus:border-gray-600 text-center' id='profit' type='number' placeholder='تعداد پروفیت های خود را بنویسید' min='1' required />
            <br></br>
            <input className='bg-gradient-to-tl from-purple-900 from-30% to-purple-800 text-purple-300 border-2 border-gray-400 p-3 px-3 rounded-xl w-[17rem] mt-2 focus:border-gray-600 text-center' id='cube' type='number' placeholder='تعداد  مکعب های خود را وارد کنید' min='1' required />
            <br></br>

            <button type='submit' className='bg-amber-200 text-amber-600 rounded-lg  mt-6 px-6 text-center p-1'>تخمین قیمت</button>
          </form>

        </div>

      ) : (

        <div id='container' className='tapswap-2 mx-auto flex flex-col items-center'>
          <p className='bg-amber-100 text-amber-700 rounded-lg  px-6 p-5 text-center custom-button-text mt-[24rem]'>{submitedValue} دلار</p>

          <Link to='/'>
            <p className='bg-green-500 text-gray-900 rounded-lg mt-2 px-6 text-center p-1'>بازگشت</p>
          </Link>
        </div>

      )}
    </div>
  )
}
