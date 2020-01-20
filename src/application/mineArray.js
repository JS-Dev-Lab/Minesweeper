function addOneMine(array, { width, height }) {
  do {
    const rank = Math.round(Math.random() * width * height);
    const x = rank % height;
    const y = Math.round(rank / width);
    if (array[x][y] === false) {
      array[x][y] = true;
      return array;
    }
  } while (true);
}

class MineArray {
  constructor({ width, height, mineNumber }) {
    let result = Array.from({ length: height }, () =>
      new Array(width).fill(false)
    );
    for (let i = 0; i < mineNumber; i++) {
      result = addOneMine(result, { width, height });
    }
    this.array = result;
    this.width = width;
    this.height = height;
    this.mineNumber = mineNumber;
    this.invariant();
  }

  invariant() {
    const mineNumberCalculated = this.array.reduce(
      (previous, raw) =>
        previous + raw.reduce((a, b) => a + (b === true ? 1 : 0)),
      0
    );
    if (mineNumberCalculated !== this.mineNumber) {
      throw new Error("invariant broken: number of mines");
    }
  }
}
export { MineArray };
