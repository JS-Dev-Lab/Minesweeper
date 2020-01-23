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

  get size() {
    return this.width * this.height;
  }

  guess(position) {
    const cell = this.getCell(position);
    if (cell.seen) {
      return;
    }
    cell.seen = true;
    if (cell.mine) {
      this.status = "loose";
      return;
    }
    const allSeen = this.reduceMineSweep(({ seen }) => seen ? 1 : 0);
    if (allSeen + this.mineNumber === this.size) {
      this.status = "win";
      return;
    }
    if (cell.neighborMines !== 0) {
      return;
    }
    this.forEachNeighbors(position, ({ x, y }) => this.guess({ x, y }));
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
      this.forEachNeighbors(position, ({ value }) => value.neighborMines++);
      count++;
    } while (count < max);
  }

  forEachNeighbors(position, callback) {
    return this._array.getNeighbors(position).forEach(callback);
  }

  getCell(position) {
    return this._array.getValue(position);
  }

  get array() {
    return this._array.photo;
  }

  reduceMineSweep(counter) {
    return this._array.reduce((a, b) => a + counter(b), 0);
  }

  invariant() {
    const mineNumberCalculated = this.reduceMineSweep(({ mine }) => (mine === true ? 1 : 0));
    if (mineNumberCalculated !== this.mineNumber) {
      throw new Error(
        `invariant broken: number of mines: expected ${this.mineNumber} calculated: ${mineNumberCalculated}`
      );
    }
  }
}
export { MineArray };
