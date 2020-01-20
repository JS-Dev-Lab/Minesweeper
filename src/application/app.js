function run(createView, MineArray) {
  const width = 20;
  const height = 30;
  const mineNumber = 50;

  let mineArray = new MineArray({ width, height, mineNumber });

  const view = createView({
    state: {
      array: mineArray.array,
      mineCount: mineArray.mineCount
    },
    commands: {
      reRun() {
        mineArray = new MineArray({ width, height, mineNumber });
        view.update(s => {
          s.array = mineArray.array;
          s.mineCount = mineArray.mineCount;
        });
      },
      guess({ x, y }) {
        view.update(state => {
          state.count++;
        });
      }
    }
  });
}

export { run };
