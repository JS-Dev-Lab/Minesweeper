class TwoDimensionalArray {
  constructor({ width, height, value }) {
    this.array = Array.from({ length: height }, () =>
      new Array(width).fill(value)
    );
    this.width = width;
    this.height = height;
  }

  get numberElements() {
    return this.width * this.height;
  }

  get foto() {
    return this.array.map(value => [...value]);
  }

  getValue({ x, y }) {
    return this.array[x][y];
  }

  setValue({ x, y }, value) {
    this.array[x][y] = value;
  }

  getPosition(rank) {
    const x = rank % this.height;
    const y = Math.round(rank / this.width);
    return { x, y };
  }

  reduce(callback, inicial) {
    let accumulator = inicial;
    for (let x = 0; x < this.width; x++) {
      for (let y = 0; y < this.height; y++) {
        accumulator = callback(accumulator, this.array[y][x], { x, y });
      }
    }
    return accumulator;
  }
}

export { TwoDimensionalArray };
