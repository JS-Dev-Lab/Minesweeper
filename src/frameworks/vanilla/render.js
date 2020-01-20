function render({ state }) {
  const newState = Object.assign(
    { ...state },
    {
      array: state.array.map(row =>
        row.reduce((a, b) => a + (b ? "1" : "0"), "")
      )
    }
  );
  return `<pre>${JSON.stringify(newState.array, null, 2)}</pre>
          <button onClick="commands.reRun();">Restart</button>`;
}

export { render };
