import { TwoDimensionalArray } from "../infra/TwoDimensionalArray";

class MineArray {
  constructor({ width, height, mineNumber }) {
    this._array = new TwoDimensionalArray({
      width,
      height,
      value: () => ({ mine: false, neighborMines: 0, seen: false })
    });
    this.width = width;
    this.height = height;
    this.status = "running";
    this.mineNumber = Math.min(mineNumber, width * height - 1);
    this.addMines();
    this.invariant();
  }

  guess(position) {
    const cell = this.getCell(position);
    cell.seen = true;
    if (cell.mine) {
      this.status = "loose";
      return;
    }
  }

  addMines() {
    let count = 0;
    const max = this.mineNumber;
    do {
      const rank = Math.round(Math.random() * (this._array.numberElements - 1));
      const position = this._array.getPosition(rank);
      const cell = this.getCell(position);
      if (cell.mine) {
        continue;
      }
      cell.mine = true;
      this._array
        .getNeighbors(position)
        .forEach(value => value.neighborMines++);
      count++;
    } while (count < max);
  }

  getCell(position) {
    return this._array.getValue(position);
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
