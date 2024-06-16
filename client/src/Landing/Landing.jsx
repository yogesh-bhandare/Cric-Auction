import React from 'react'

const Landing = () => {
  return (
    <div className='h-screen w-full bg-[url("https://img.freepik.com/free-vector/green-cricket-sports-background-with-illustration-players-golden-trophy-cup_1302-5494.jpg?w=996&t=st=1717749576~exp=1717750176~hmac=93f93628aaa8050f4585b63eba92b71644af6292b7b8068f24a05cb32243941d")] bg-no-repeat bg-center bg-cover bg-opacity-90'>
        <div className='bg-black bg-opacity-75 h-screen w-full font-["Poppins"] text-white'>
            <div className='Heading w-full h-screen flex justify-center items-center'>
                <div className='text-center px-60'>
                    <h1 className='font-bold text-8xl py-2 text-[#F23D4C]'>
                        Cric Auction
                    </h1>
                    <h1 className='font-semibold text-2xl py-2'>
                    Join the fun and excitement of auctioning your favorite players. Create teams, bid for players, and manage your team just like in the real IPL Auction!
                    </h1>
                    <button className='mt-4 text-2xl px-4 py-2 rounded-md bg-[#BFF207] text-[#262626]'>
                        Getting Started
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Landing