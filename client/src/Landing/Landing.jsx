import React from 'react'

const Landing = () => {
  return (
    <div className='h-screen w-full bg-[url("https://img.freepik.com/free-photo/sports-tools_53876-138077.jpg?t=st=1719556374~exp=1719559974~hmac=829c36b8fbc888bef9cf653a1175f26c59f500b1a30545b7eefef82c52ca205c&w=1060")] bg-no-repeat bg-center bg-cover bg-opacity-90'>
        <div className='bg-black bg-opacity-60 h-screen w-full font-["Poppins"] text-white'>
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