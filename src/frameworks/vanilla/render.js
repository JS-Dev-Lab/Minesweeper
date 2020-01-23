function formatter({ seen, mine, neighborMines }) {
  if (!seen) {
    return " ";
  }
  if (mine) {
    return "*";
  }
  return neighborMines === 0 ? " " : neighborMines;
}

function render({ state: { array: rawArray, status, height, width } }) {
  return `<style>
            .wrapper {
              display: grid;
              grid-template-columns: repeat(${height}, 30px);
              grid-template-rows: repeat(${width}, 30px);
              grid-gap: 2px;
            }
            .cell.unseen {
              background: lightgrey;
            }
          </style>
          <div class="wrapper">
          ${rawArray.flatMap((row,x) => row.map((cell,y) => `<div class="cell number-${cell.neighborMines} ${cell.seen? "" : "unseen"}" onClick="commands.guess({x:${x},y:${y}})">${formatter(cell)}</div>`)).join("")}
          </div>
          ${status === "loose" ? "<p>you loose!!!!</p>" : ""}
          <button onClick="commands.reRun();">Restart</button>`;
}

export { render };
