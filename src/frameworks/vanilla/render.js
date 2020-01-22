function formater(cell) {
  if (cell.mine) {
    return "*";
  }
  if (cell.neighbourMines === 0) {
    return " ";
  }
  return cell.neighbourMines;
}

function render({ state }) {
  const newState = Object.assign(
    { ...state },
    {
      array: state.array.map(row => row.reduce((a, b) => a + formater(b), ""))
    }
  );
  return `<pre>${JSON.stringify(newState.array, null, 2)}</pre>       
          <button onClick="commands.reRun();">Restart</button>`;
}

export { render };
