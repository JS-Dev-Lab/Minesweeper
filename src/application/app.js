function run(
  createView,
  MineArray,
  { width = 20, height = 30, mineNumber = 50 } = {}
) {
  let mineArray = new MineArray({ width, height, mineNumber });
  let timeUpdater = null;

  function startTime() {
    const from = new Date();
    view.update(s => (s.timeSpend = 0));
    return window.setInterval(() => {
      const now = new Date();
      const timeSpendInSecond = Math.round(Math.abs(from - now) / 1000);
      view.update(s => (s.timeSpend = timeSpendInSecond));
    }, 1000);
  }

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
      mineNumber,
      timeSpend: 0
    },
    commands: {
      reRun() {
        mineArray = new MineArray({ width, height, mineNumber });
        timeUpdater = startTime();
        updateView();
      },
      guess({ x, y }) {
        mineArray.guess({ x, y });
        if (mineArray.status !== "running") {
          window.clearInterval(timeUpdater);
        }
        updateView();
      }
    }
  });

  timeUpdater = startTime();
}

export { run };
