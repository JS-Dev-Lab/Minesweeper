import { TwoDimensionalArray } from "../infra/TwoDimensionalArray";

class MineArray {
  constructor({ width, height, mineNumber }) {
    this._array = new TwoDimensionalArray({ width, height, value: false });
    this._mineCount = new TwoDimensionalArray({ width, height, value: 0 });
    this.width = width;
    this.height = height;
    this.mineNumber = mineNumber;
    this.addMines();
    this.solve();
    this.invariant();
  }

  addMines() {
    let count = 0;
    const max = this.mineNumber;
    do {
      const rank = Math.round(Math.random() * this._array.numberElements);
      const position = this._array.getPosition(rank);
      if (!this._array.getValue(position)) {
        this._array.setValue(position, true);
        count++;
      }
    } while (count < max);
  }

  get array() {
    return this._array.foto;
  }

  get mineCount() {
    return this._mineCount.foto;
  }

  solve() {
    this._array.forEach((value, { x, y }) => {
      const mineCountValue =
        value ||
        this._array
          .getNeighbours({ x, y })
          .reduce((a, b) => a + (b ? 1 : 0), 0);
      this._mineCount.setValue({ x, y }, mineCountValue);
    });
  }

  invariant() {
    const mineNumberCalculated = this._array.reduce(
      (a, b) => a + (b === true ? 1 : 0),
      0
    );
    if (mineNumberCalculated !== this.mineNumber) {
      throw new Error(
        `invariant broken: number of mines: expected ${this.mineNumber} calculated: ${mineNumberCalculated}`
      );
    }
  }
}
export { MineArray };
