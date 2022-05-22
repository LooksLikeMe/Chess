import './app.css'

import { useEffect, useState } from 'react'
import BoardComponent from './componenst/BoardComponent'
import { Board } from './models/Board'

function App() {
  const [board, setBoard] = useState(new Board())

  useEffect(() => {
    restart()
  },[])

  const restart = () => {
    const newBoard = new Board()

    newBoard.initCells()
    setBoard(newBoard)
  }
  return (
    <div className="app">
      <BoardComponent board={board} setBoard={setBoard}/>
    </div>
  )
}

export default App
