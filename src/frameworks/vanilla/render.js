function render({ state }) {
  window.console.log(state);
  const newState = Object.assign(
    { ...state },
    {
      array: state.array.map(row =>
        row.reduce((a, b) => a + (b ? "1" : "0"), "")
      )
    }
  );
  return `<pre>${JSON.stringify(newState, null, 2)}</pre>`;
}

export { render };
