import React, { useState } from 'react'
import Header from './Header'
import Dice from './Dice'
function Game() {
    const [score, setScore] = useState(0)
    const [error, setError] = useState(false)
    const [selectedNumber, setSelectedNumber] = useState(undefined)
    return (
        <div className='flex flex-col md:flex-col w-full min-h-screen items-center md:items-stretch justify-center md:justify-stretch'>
            {/* score and dice numbers */}
            <Header selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} score={score} error={error} 
                setError={setError} />
            <Dice selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} score={score} setScore={setScore} setError={setError} />
        </div>
    )
}

export default Game