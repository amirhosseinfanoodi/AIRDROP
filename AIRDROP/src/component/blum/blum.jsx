import React, {useState} from 'react'
import './blum.css'

import { Link } from 'react-router-dom'

export default function Blum()
{

  const [submitedValue, setSubmitedValue] = useState(null);

  function handleSubmit(event)
  {
    event.preventDefault();

    const input = document.getElementById('token');
    const token = parseFloat(input.value);
    const price = token * 0.0003;

    setSubmitedValue(price > 1 ? Math.ceil(price) : 0);
  }

  return (
    <div>
      {submitedValue === null ? (
        <div id='container' className='blum-1 flex flex-col items-center mx-auto'>

          <form onSubmit={handleSubmit} id='form'>
            <input className='text-gray-300 bg-gradient-to-tl from-neutral-900 from-30% to-neutral-700 border-2 border-gray-400 p-3 px-3 rounded-xl w-[17rem] mt-[16rem] focus:border-gray-600 text-center' id='token' type='number' min='1' placeholder='مقدار توکن PAWS خود را وارد کنید' required/>
            <br></br>
            <button type="submit" className='bg-blue-400 rounded-lg mt-6 px-6 text-center p-1'>تخمین قیمت</button>
          </form>

        </div>
      ) : (
        <div id='container' className='blum-2 flex flex-col items-center mx-auto'>

          <p className='bg-blue-300 text-cyan-700 rounded-lg px-6 p-5 text-center  mt-[16rem]'> {submitedValue} دلار</p>
          <Link to='/'>
            <p className='bg-blue-500 text-gray-900 rounded-lg mt-6 px-6 text-center p-1'>بازگشت</p>
          </Link>

        </div>
      )}
    </div>
  )
}
