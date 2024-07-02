import React, { useState } from 'react'

function Header({ selectedNumber, setSelectedNumber, score, error, setError }) {
    const diceNumbers = [1, 2, 3, 4, 5, 6]
    // when user select the dice number
    function selectNumber(diceNO) {
        setError(false)
        setSelectedNumber(diceNO)
    }

    return (
        <div
            className='flex flex-col gap-5 md:flex-row md:justify-between items-center py-5 px-9'>
            <div className="flex items-center flex-col">
                <h1 className='font-bold text-5xl'>{score}</h1>
                <h1 className='font-bold text-2xl'>Score</h1>
            </div>
            <div>
                {error && <p className='text-right text-red-600 my-1'>You have to select one number</p>}
                <div className='flex gap-4'>
                    {diceNumbers.map((diceNO) => (
                        <div key={diceNO} className={selectedNumber === diceNO ? 'selectedDice diceNumbers' : 'diceNumbers'} onClick={() => selectNumber(diceNO)}>{diceNO}</div>
                    ))}
                </div>
                <p className='font-semibold text-right my-2'>Select Number</p>
            </div>
        </div>
    )
}

export default Header