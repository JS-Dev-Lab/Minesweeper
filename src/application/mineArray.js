import { TwoDimensionalArray } from "../infra/TwoDimensionalArray";

class MineArray {
  constructor({ width, height, mineNumber }) {
    this._array = new TwoDimensionalArray({
      width,
      height,
      value: () => ({ mine: false, neighbourMines: 0 })
    });
    this.width = width;
    this.height = height;
    this.mineNumber = Math.min(mineNumber, width * height - 1);
    this.addMines();
    this.invariant();
  }

  addMines() {
    let count = 0;
    const max = this.mineNumber;
    do {
      const rank = Math.round(Math.random() * (this._array.numberElements - 1));
      const position = this._array.getPosition(rank);
      if (this._array.getValue(position).mine) {
        continue;
      }
      this._array.getValue(position).mine = true;
      this._array
        .getNeighbours(position)
        .forEach(value => value.neighbourMines++);
      count++;
    } while (count < max);
  }

  get array() {
    return this._array.photo;
  }

  invariant() {
    const mineNumberCalculated = this._array.reduce(
      (a, b) => a + (b.mine === true ? 1 : 0),
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
