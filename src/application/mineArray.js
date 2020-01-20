import { TwoDimensionalArray } from "../infra/TwoDimensionalArray";

class MineArray {
  constructor({ width, height, mineNumber }) {
    this._array = new TwoDimensionalArray({ width, height, value: false });
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

  solve() {
    window.console.log("solve");
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
