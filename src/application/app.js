function run(createView, MineArray) {
  const width = 20;
  const height = 30;
  const mineNumber = 50;

  let mineArray = new MineArray({ width, height, mineNumber });
  let from = new Date();

  function updateView(updater) {
    view.update(s => {
      s.array = mineArray.array;
      s.status = mineArray.status;
      updater && updater(s);
    });
  }

  const view = createView({
    state: {
      array: mineArray.array,
      status: mineArray.status,
      width,
      height,
      mineNumber,
      timeSpend: 0
    },
    commands: {
      reRun() {
        mineArray = new MineArray({ width, height, mineNumber });
        from = new Date();
        updateView(s => s.timeSpend = 0);
      },
      guess({ x, y }) {
        mineArray.guess({ x, y });
        updateView();
      }
    }
  });

  window.setInterval(() => {
    if (mineArray.status !== "running") {
      return;
    }
    const now = new Date();
    const timeSpendInSecond = Math.round(Math.abs(from - now) / 1000);
    view.update(s => s.timeSpend = timeSpendInSecond);
  }, 1000);
}

export { run };
