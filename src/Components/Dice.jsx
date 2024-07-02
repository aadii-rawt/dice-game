import React, { useState } from 'react'
import { useEffect } from 'react'

function Dice({ setSelectedNumber, selectedNumber, score, setError, setScore }) {
    const [diceNumber, setDiceNumber] = useState(1)

    function diceRole() {
        // if user not selected any dice number through error
        if (!selectedNumber) {
            setError(true)
            return
        }
        // generate random dice number
        setDiceNumber(Math.floor(Math.random() * 6) + 1)
    }

    useEffect(() => {
        if (diceNumber == selectedNumber) {
            setScore(prev => prev + 2)
        } else {
            if(score > 0) setScore(prev => prev - 1)
        }
        setSelectedNumber(null)
    }, [diceNumber])

    return (
        <div className='w-full flex justify-center items-center flex-col py-7'>
            <div onClick={diceRole} >
                <img src={`/dice_${diceNumber}.png`} alt="dice pic"
                    className='w-[7rem] cursor-pointer' />
            </div>
            <h3 className='my-2'>Click on Dice to roll</h3>
            <button className='my-2 bg-black text-white px-6 py-2'
            onClick={()=> setScore(0)}>
                Reset Score</button>
            <button className='my-2 text-black font-semibold px-6 py-2 border-2 border-black'>Check Rules</button>
        </div>
    )
}

export default Dice