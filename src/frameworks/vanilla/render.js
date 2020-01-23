function formatter({ seen, mine, neighborMines }) {
  if (!seen) {
    return "-";
  }
  if (mine) {
    return "*";
  }
  return neighborMines === 0 ? " " : neighborMines;
}

function render({ state: { array: rawArray, status } }) {
  const array = rawArray
    .map(row => row.reduce((a, b) => a + formatter(b), ""))
    .reduce((acc, row) => acc + "\n" + row);
  return `<pre>${array}</pre>
          ${status === "loose" ? "<p>you loose!!!!</p>" : ""}   
          <button onClick="commands.reRun();">Restart</button>`;
}

export { render };
