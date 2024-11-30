import React from 'react';
import { Link } from 'react-router-dom';
import './main.css';  

export default function Main() {
  const raindropCount = 25;
  const raindrops = Array.from({ length: raindropCount }, (_, index) => (
    <div key={index} className="raindrop"></div>
  ));

  const createBubble = (e) => {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    
    // تعیین موقعیت حباب
    const { clientX, clientY } = e;
    bubble.style.left = `${clientX}px`;
    bubble.style.top = `${clientY}px`;
    
    document.body.appendChild(bubble);

    // حذف حباب پس از انیمیشن
    setTimeout(() => {
      bubble.remove();
    }, 500);
  };

  return (
      <div className="rain-container flex flex-col items-center pt-1">
        {raindrops} {/* قرار دادن قطرات در اینجا */}

        <div>
          <img className='w-[2rem] m-3' src="/public/images/main/main.png" alt="" />
        </div>
        
        <div className='flex flex-col items-center x z-40 mt-2 '>
          <Link to="/blum" className="btn blum animated-border mt-1 flex justify-around items-center rounded-2xl border-solid border-2 border-gray-600 shadow-lg shadow-gray-200/10 bg-gradient-to-br from-neutral-900 from-30% to-neutral-700" onClick={createBubble}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            {/* Blum */}
            <img className='rounded-[1.3rem] bg-cyan-300' src="./../../../public/images/pwas/main.png" alt="blum" />
            <div className='ml-4 txt-sub text-gray-400'>
              <h3 className='mt-2 border-b-2 text-gray-200 flex justify-evenly items-center text-[17px]'>PAWS <p className='text-[8px]'>{'(تعیین قیمت پاوز)'}</p></h3>
              <p className='text-[7px] text-justify mt-2'>ANIMALS ARE DONEI IT'S PAWS SEASON JOIN OUR COMMUNITY @PAWSUPFAM</p>
            </div>
          </Link>

          <Link to="/major" className="btn major animated-border mt-1 flex justify-around items-center rounded-2xl border-solid border-2 border-gray-600 shadow-lg shadow-gray-200/10 bg-gradient-to-tl from-neutral-900 from-30% to-neutral-700" onClick={createBubble}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            {/* Major */}
            <img className='rounded-3xl rounded-[1.3rem]' src="./../../../public/images/major/main.jpg" alt="major" />

            <div className='ml-4 txt-sub text-gray-400'>
              <h3 className='mt-2 border-b-2 text-gray-200 flex justify-evenly items-center text-[17px]'>MAJOR <p className='text-[8px]'>{'(تعیین قیمت میجر)'}</p></h3>
              <p className='text-[7px] text-left mt-2'>BECOME A MAJOR OF TELEGRAM.$MAGOR TOKEN RELEASE SOON.</p>
            </div>
          </Link>
        </div>

        <div className='flex flex-col items-center '>
          <Link to="/xempire" className="btn Empire animated-border mt-1 flex justify-around items-center rounded-2xl border-solid border-2 border-gray-600 shadow-lg shadow-gray-200/10 bg-gradient-to-br from-neutral-900 from-30% to-neutral-700" onClick={createBubble}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            {/* X Empire */}
            <img className='rounded-3xl rounded-[1.3rem]' src="./../../../public/images/xempire/photo_2024-07-09_00-38-02.png" alt="xempire" />
            <div className='ml-4 txt-sub text-gray-400'>
              <h3 className='mt-2 border-b-2 text-gray-200 flex justify-evenly items-center text-[14px]'>Pixel <p className='text-[6px]'>{'(تعیین قیمت پیکسل)'}</p></h3>
              <p className='text-[7px] text-start mt-2'>TRADE,CONNECT,GROW AND...FARM BLUM POINTS! </p>
            </div>
          </Link>

          <Link to="/tapswap" className="btn tap-swap animated-border mt-1 flex justify-around items-center rounded-2xl border-solid border-2 border-gray-600 shadow-lg shadow-gray-200/10 bg-gradient-to-tl from-neutral-900 from-30% to-neutral-700" onClick={createBubble}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            {/* Tap Swap */}
            <img className='rounded-2xl rounded-[1.3rem]' src="./../../../public/images/tapswap/main.jpg" alt="tapswap" />
            <div className='ml-4 txt-sub text-gray-400'>
              <h3 className='mt-2 border-b-2 text-gray-200 flex justify-evenly items-center text-[14px]'>TAPSWAP <p className='text-[7px]'>{'(تعیین قیمت تپ سواپ)'}</p></h3>
              <p className='text-[7px] text-start mt-2 font-bold'>TRADE,CONNECT,GROW AND...FARM BLUM POINTS! MADE BY @BLUMCRYPTO TEAM</p>
            </div>
          </Link>
        </div>

        <p className='text-emerald-50 fixed bottom-0 text-center pb-1 mt-2 '>DROPISHO</p>
      </div>
  );
}
