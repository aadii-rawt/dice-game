import './index.css'
import Home from './Components/Home'
import Game from './Components/Game'
import { useState } from 'react'
function App() {
  const [gameActive,setGameActive] = useState(false)
  return (
    <>
    {
      gameActive ? <Game /> : <Home gameActive={gameActive} setGameActive={setGameActive} />
    }
    </>
  )
}

export default App
