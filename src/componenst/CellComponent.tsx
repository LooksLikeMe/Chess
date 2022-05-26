import React, { FC } from 'react'
import { Cell } from 'models/Cell'

interface CellProps {
  cell: Cell
  selected: boolean
  handleClick: (cell: Cell) => void
}

const CellComponent: FC<CellProps> = ({ cell, selected, handleClick }) => {
  return (
    <div
      className={[
        'cell',
        cell.color,
        cell.available && cell.figure ? 'pointed' : '',
        selected ? 'selected' : '',
        
      ].join(' ')}
      onClick={() => handleClick(cell)}
    >
      {cell.available && !cell.figure && <div className={'available'} />}
      {cell.figure?.view && <img src={cell.figure.view} alt={''} />}
    </div>
  )
}

export default CellComponent
