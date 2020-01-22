function formater(cell) {
  if (!cell.seen) {
    return "-";
  }
  if (cell.mine) {
    return "*";
  }
  if (cell.neighbourMines === 0) {
    return " ";
  }
  return cell.neighbourMines;
}

function render({ state }) {
  const array = state.array.map(row =>
    row.reduce((a, b) => a + formater(b), "")
  );
  return `<pre>${JSON.stringify(array, null, 2)}</pre>
          ${state.status === "loose" ? "<p>you loose!!!!</p>" : ""}   
          <button onClick="commands.reRun();">Restart</button>`;
}

export { render };
