function formater({ seen, mine, neighbourMines }) {
  if (!seen) {
    return "-";
  }
  if (mine) {
    return "*";
  }
  return neighbourMines === 0 ? " " : neighbourMines;
}

function render({ state: { array: rawArray, status } }) {
  const array = rawArray
    .map(row => row.reduce((a, b) => a + formater(b), ""))
    .reduce((acc, row) => acc + "\n" + row);
  return `<pre>${array}</pre>
          ${status === "loose" ? "<p>you loose!!!!</p>" : ""}   
          <button onClick="commands.reRun();">Restart</button>`;
}

export { render };
