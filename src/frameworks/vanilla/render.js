function formatter({ seen, mine, neighborMines }) {
  if (!seen) {
    return "";
  }
  if (mine) {
    return "*";
  }
  return neighborMines === 0 ? "" : neighborMines;
}

function render({
  state: { array: rawArray, status, height, width, timeSpend }
}) {
  return `<style>
            .wrapper {
              display: grid;
              grid-template-columns: repeat(${height}, 30px);
              grid-template-rows: repeat(${width}, 30px);
              grid-gap: 2px;
            }
          </style>
          <div class="wrapper">
          ${rawArray
            .flatMap((row, x) =>
              row.map(
                (cell, y) =>
                  `<div class="cell position-${x}-${y} number-${
                    cell.neighborMines
                  } ${cell.seen ? "seen" : "unseen"} ${
                    cell.mine ? "mine" : ""
                  }" onClick="commands.guess({x:${x},y:${y}})">${formatter(
                    cell
                  )}</div>`
              )
            )
            .join("")}
          </div>
          ${status === "loose" ? "<p>you loose!!!!</p>" : ""}
          ${status === "win" ? "<p>you win buddy!!!!</p>" : ""}
          <p>${timeSpend}</p>
          <button onClick="commands.reRun();">Restart</button>`;
}

export { render };
