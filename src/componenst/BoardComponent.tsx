import { Cell } from 'models/Cell'
import { FC, useEffect, useState } from 'react'

import { Board } from '../models/Board'

import CellComponent from './CellComponent'

interface BoardProps {
  board: Board
  setBoard: (board: Board) => void
}

const BoardComponent: FC<BoardProps> = ({ board, setBoard }) => {
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null)

  const updeteBoard = () => {
    const newBoard = board.getCopyBoard()
    setBoard(newBoard)
  }

  const highlightCells = () => {
    board.highlightCells(selectedCell)
    updeteBoard()
  }

  const handleClick = (cell: Cell) => {
    cell.figure && setSelectedCell(cell)
  }

  useEffect(() => {
    highlightCells()
  },[])
  {console.log(board)}
  return (
    <div className="board">
     
      
      {board.cells.map((row, index) => (
        <div key={index}>
          {row.map(cell => (
            <CellComponent
              cell={cell}
              handleClick={handleClick}
              key={cell.id}
              selected={
                cell.x === selectedCell?.x && cell.y === selectedCell?.y
              }
            />
          ))}
        </div>
      ))}
    </div>
  )
}

export default BoardComponent
