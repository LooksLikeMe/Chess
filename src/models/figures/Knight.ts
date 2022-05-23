import { Figure, FigureNames } from './Figure'
import { Colors } from 'models/Colors'
import { Cell } from 'models/Cell'

import blackView from 'assets/black-knight.png'
import whiteView from 'assets/white-knight.png'
export class Knight extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell)
    this.view = color === Colors.BLACK ? blackView : whiteView
    this.name = FigureNames.KNIGHT
  }
}
