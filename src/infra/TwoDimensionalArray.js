import { range } from "./range";

class TwoDimensionalArray {
  constructor({ width, height, value }) {
    const getValue = typeof value === "function" ? value : () => value;
    this.array = Array.from({ length: width }, () =>
      Array.from({ length: height }, getValue)
    );
    this.width = width;
    this.height = height;
  }

  get numberElements() {
    return this.width * this.height;
  }

  get photo() {
    return this.map(value => value);
  }

  map(mapper) {
    return this.array.map(value => value.map(mapper));
  }

  getValue({ x, y }) {
    return this.array[x][y];
  }

  setValue({ x, y }, value) {
    this.array[x][y] = value;
  }

  getNeighbors({ x: x0, y: y0 }) {
    return this.rangeX(x0 - 1, x0 + 1)
      .flatMap(x => this.rangeY(y0 - 1, y0 + 1).map(y => ({ x, y })))
      .filter(({ x, y }) => x !== x0 || y !== y0)
      .map(this.getValue.bind(this));
  }

  rangeX(x0, x1) {
    return range(this.getXScaled(x0), this.getXScaled(x1));
  }

  rangeY(y0, y1) {
    return range(this.getYScaled(y0), this.getYScaled(y1));
  }

  getXScaled(x) {
    return x < 0 ? 0 : x >= this.width ? this.width - 1 : x;
  }

  getYScaled(y) {
    return y < 0 ? 0 : y >= this.height ? this.height - 1 : y;
  }

  getPosition(rank) {
    const x = rank % this.width;
    const y = Math.ceil((rank - x) / this.width);
    return { x, y };
  }

  reduce(callback, start) {
    let accumulator = start;
    this.forEach((value, position) => {
      accumulator = callback(accumulator, value, position);
    });
    return accumulator;
  }

  forEach(callBack) {
    for (let x = 0; x < this.width; x++) {
      for (let y = 0; y < this.height; y++) {
        callBack(this.array[x][y], { x, y });
      }
    }
    return this;
  }
}

export { TwoDimensionalArray };
