import { Figure, FigureNames } from './Figure'
import { Colors } from 'models/Colors'
import { Cell } from 'models/Cell'

import blackView from 'assets/black-bishop.png'
import whiteView from 'assets/white-bishop.png'

export class Bishop extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell)
    this.view = color === Colors.BLACK ? blackView : whiteView
    this.name = FigureNames.BISHOP
  }
  canMove(target: Cell): boolean {
    if (!super.canMove(target)) {
      return false
    }
    return true
  }
}
