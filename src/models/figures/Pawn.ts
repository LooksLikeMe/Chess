import { Figure, FigureNames } from './Figure'
import { Colors } from 'models/Colors'
import { Cell } from 'models/Cell'

import blackView from 'assets/black-pawn.png'
import whiteView from 'assets/white-pawn.png'
export class Pawn extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell)
    this.view = color === Colors.BLACK ? blackView : whiteView
    this.name = FigureNames.PAWN
  }
  canMove(target: Cell): boolean {
    if (!super.canMove(target)) {
      return false
    }
    return true
  }
}
