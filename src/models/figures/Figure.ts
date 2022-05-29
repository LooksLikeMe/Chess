import view from 'assets/black-king.png'
import { Cell } from 'models/Cell'
import { Colors } from 'models/Colors'
import { v4 as uuidv4 } from 'uuid'

export enum FigureNames {
  FIGURE = 'Фигура',
  KING = 'Король',
  KNIGHT = 'Конь',
  PAWN = 'Пешка',
  QUEEN = 'Ферзь',
  ROOK = 'Ладья',
  BISHOP = 'Слон',
}

export class Figure {
  color: Colors
  view: typeof view | null
  cell: Cell
  name: FigureNames
  id: string

  constructor(color: Colors, cell: Cell) {
    this.color = color
    this.cell = cell
    this.cell.figure = this
    this.view = null
    this.name = FigureNames.FIGURE
    this.id = uuidv4()
  }
  canMove(target: Cell): boolean {
    if(target.figure?.color == this.color) {
      return false
    }
    if(target.figure?.name == FigureNames.KING) {
      return false
    }
    return true
  }
  moveFigure(target: Cell) {

  }
}
