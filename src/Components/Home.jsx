import React from 'react'
function Home({gameActive,setGameActive}) {
  return (
    <div className='w-screen min-h-screen flex flex-col md:flex-row items-center justify-center md:justify-evenly gap-10'> 
      <div className=''>
        <img src='dices.png' alt="dice image" className='w-72' />
      </div >
        <div className=''>
            <h2 className='font-extrabold tracking-tighter text-6xl'>Dice Game</h2>
            <button className='btn my-3 text-right' onClick={() => setGameActive(!gameActive)}>Let's Play</button>
        </div>
    </div>
  )
}

export default Home