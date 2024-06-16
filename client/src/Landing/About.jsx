import React from 'react'

const About = () => {
  return (
    <div className='border-b-[1px] border-[#B2F252] w-full text-white bg-[#262626] font-[Poppins] px-20 py-12'>
        <div className='flex-row items-center justify-center'>
            <h1 className='text-5xl font-bold py-2 text-[#BFF207]'>
                What is Cric Auction?
            </h1>
            <h1 className='text-lg py-2'>
            Cric Auction is an online player auction software that helps tournament organizers to conduct auction of players with multiple sports options available like cricket, football, volleyball, kabaddi etc. We also provide live streaming overlay and real-time updates.
            </h1>
            <h1 className='text-lg pt-2'>
            For Tournament Organizers, maintaining excel sheets for each and every task becomes really tedious and that is where BidAthlete comes in where everything is automated and you can download data anytime you want. BidAthlete also helps you get more sponsors for your tournament as you can advertize your sponsors on the auction screen.
            </h1>
            
        </div>
    </div>
  )
}

export default About