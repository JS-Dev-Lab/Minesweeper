import { TwoDimensionalArray } from "../infra/TwoDimensionalArray";

class MineArray {
  constructor({ width, height, mineNumber }) {
    this._array = new TwoDimensionalArray({ width, height, value: false });
    this._mineCount = new TwoDimensionalArray({ width, height, value: 0 });
    this.width = width;
    this.height = height;
    this.mineNumber = mineNumber;
    for (let i = 0; i < mineNumber; i++) {
      this.addOneMine();
    }
    this.solve();
    this.invariant();
  }

  addOneMine() {
    do {
      const rank = Math.round(Math.random() * this._array.numberElements);
      const position = this._array.getPosition(rank);
      if (this._array.getValue(position) === false) {
        this._array.setValue(position, true);
        return;
      }
    } while (true);
  }

  get array() {
    return this._array.foto;
  }

  get mineCount() {
    return this._mineCount.foto;
  }

  solve() {
    this._array.forEach((_, { x, y }) => {
      const value = this._array.getNeighbours({ x, y }).reduce((a, b) => {
        window.console.log({ x, y }, b);
        return a + (b ? 1 : 0);
      }, -(this._array.getValue({ x, y }) ? 1 : 0));
      this._mineCount.setValue({ x, y }, value);
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
