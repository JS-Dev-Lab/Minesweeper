const formatter = {
  "0": " ",
  true: "*"
};

function render({ state }) {
  const newState = Object.assign(
    { ...state },
    {
      array: state.array.map(row =>
        row.reduce((a, b) => a + (b ? "1" : "0"), "")
      ),
      mineCount: state.mineCount.map(row =>
        row.reduce((a, b) => a + (formatter[b.toString()] || b), "")
      )
    }
  );
  return `<pre>${JSON.stringify(newState.array, null, 2)}</pre>
          <pre>${JSON.stringify(newState.mineCount, null, 2)}</pre>
          <button onClick="commands.reRun();">Restart</button>`;
}

export { render };
