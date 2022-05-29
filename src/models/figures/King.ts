import { Figure, FigureNames } from './Figure'
import { Colors } from 'models/Colors'
import { Cell } from 'models/Cell'

import blackView from 'assets/black-king.png'
import whiteView from 'assets/white-king.png'
export class King extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell)
    this.view = color === Colors.BLACK ? blackView : whiteView
    this.name = FigureNames.KING
  }
  canMove(target: Cell): boolean {
    if (!super.canMove(target)) {
      return false
    }
    return true
  }
}
