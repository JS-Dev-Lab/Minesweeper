function run(createView, MineArray) {
  const width = 20;
  const height = 30;
  const mineNumber = 50;

  let mineArray = new MineArray({ width, height, mineNumber });

  function updateView() {
    view.update(s => {
      s.array = mineArray.array;
      s.status = mineArray.status;
    });
  }

  const view = createView({
    state: {
      array: mineArray.array,
      status: mineArray.status,
      width,
      height, 
      mineNumber
    },
    commands: {
      reRun() {
        mineArray = new MineArray({ width, height, mineNumber });
        updateView();
      },
      guess({ x, y }) {
        mineArray.guess({ x, y });
        updateView();
      }
    }
  });
}

export { run };
