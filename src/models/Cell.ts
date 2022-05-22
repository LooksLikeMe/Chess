import { Board } from './Board'
import { Colors } from './Colors'
import { Figure } from './figures/Figure'

import { v4 as uuidv4 } from 'uuid'

export class Cell {
  readonly x: number
  readonly y: number
  readonly color: Colors
  figure: Figure | null
  board: Board
  available: boolean
  id: string

  constructor(
    x: number,
    y: number,
    color: Colors,
    board: Board,
    figure: Figure | null
  ) {
    this.x = x
    this.y = y
    this.board = board
    this.color = color
    this.figure = figure
    this.available = false
    this.id = uuidv4()
  }
}
