import React from 'react';
import { IoIosArrowRoundDown } from "react-icons/io";

const Working = () => {
  return (
    <div className='border-y-[1px] border-[#BFF207] w-full text-white bg-[#262626] font-[Poppins] px-20 py-16'>
      <div className='flex flex-col items-center justify-center text-center'>
        <h1 className='text-3xl font-bold py-2 underline-offset-5 underline text-[#BFF207]'>
          Steps
        </h1>
        <h1 className='text-lg py-2'>
          Here are the steps you need to complete in order to do a successful auction on Cric Auction.
        </h1>

        {/* Step 1 */}
        <div className='flex items-start justify-center mt-8'>
          <div className='flex flex-col items-center'>
            <div className='h-14 w-14 rounded-full bg-[#BFF207] text-[#262626] flex items-center justify-center mb-2'>
              <h1 className='text-xl'>1</h1>
            </div>
            <h1 className='text-xl font-semibold mb-2'>Sign Up</h1>
            <p className='text-center mb-2'>You can use your google account to sign In on the platform.</p>
            <IoIosArrowRoundDown className='text-[#BFF207] text-6xl'/>
          </div>
        </div>

        {/* Step 2 */}
        <div className='flex items-start justify-center mt-8'>
          <div className='flex flex-col items-center'>
            <div className='h-14 w-14 rounded-full bg-[#BFF207] text-[#262626] flex items-center justify-center mb-2'>
              <h1 className='text-xl'>2</h1>
            </div>
            <h1 className='text-xl font-semibold mb-2'>Create Auction</h1>
            <p className='text-center mb-2'>Fill a form to provide details and logo for the Auction.</p>
            <IoIosArrowRoundDown className='text-[#BFF207] text-6xl'/>
          </div>
        </div>

        {/* Step 3 */}
        <div className='flex items-start justify-center mt-8'>
          <div className='flex flex-col items-center'>
            <div className='h-14 w-14 rounded-full bg-[#BFF207] text-[#262626] flex items-center justify-center mb-2'>
              <h1 className='text-xl'>3</h1>
            </div>
            <h1 className='text-xl font-semibold mb-2'>Add Teams</h1>
            <p className='text-center mb-2'>Add all the teams and their logos one by one by filling the form.</p>
            <IoIosArrowRoundDown className='text-[#BFF207] text-6xl'/>
          </div>
        </div>

        {/* Step 4 */}
        <div className='flex items-start justify-center mt-8'>
          <div className='flex flex-col items-center'>
            <div className='h-14 w-14 rounded-full bg-[#BFF207] text-[#262626] flex items-center justify-center mb-2'>
              <h1 className='text-xl'>4</h1>
            </div>
            <h1 className='text-xl font-semibold mb-2'>Add Players</h1>
            <p className='text-center mb-2'>Share with players the registration form or add them yourself using dashboard.</p>
            <IoIosArrowRoundDown className='text-[#BFF207] text-6xl'/>
          </div>
        </div>

        {/* Step 5 */}
        <div className='flex items-start justify-center mt-8'>
          <div className='flex flex-col items-center'>
            <div className='h-14 w-14 rounded-full bg-[#BFF207] text-[#262626] flex items-center justify-center mb-2'>
              <h1 className='text-xl'>5</h1>
            </div>
            <h1 className='text-xl font-semibold mb-2'>Do auction of players through auction dashboard.</h1>
            <p className='text-center mb-2'>The auction dashboard screen selects random players and allows you to place bid on it.</p>
            <IoIosArrowRoundDown className='text-[#BFF207] text-6xl'/>
          </div>
        </div>

        {/* Step 6 */}
        <div className='flex items-start justify-center mt-8'>
          <div className='flex flex-col items-center'>
            <div className='h-14 w-14 rounded-full bg-[#BFF207] text-[#262626] flex items-center justify-center mb-2'>
              <h1 className='text-xl'>6</h1>
            </div>
            <h1 className='text-xl font-semibold mb-2'>Share summary screen</h1>
            <p className='text-center mb-2'>Share summary screen with team owners and everyone else so that they can check the auction status live.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Working;
