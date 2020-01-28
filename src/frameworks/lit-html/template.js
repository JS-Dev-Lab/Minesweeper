import { html, nothing } from 'lit-html';
import { repeat } from 'lit-html/directives/repeat';


function formatter({ seen, mine, neighborMines }) {
  if (!seen) {
    return "";
  }
  if (mine) {
    return "*";
  }
  return neighborMines === 0 ? "" : neighborMines;
}

function getCellClass({x, y, cell: {neighborMines, seen, mine}}){
  return `cell position-${x}-${y} number-${neighborMines} ${seen ? "seen" : "unseen"} ${mine ? "mine" : ""}`;
}

function template({
  state: { array, status, height, width, timeSpend },
  commands
}) {
  return html`<style>
            .wrapper {
              display: grid;
              grid-template-columns: repeat(${height}, 30px);
              grid-template-rows: repeat(${width}, 30px);
              grid-gap: 2px;
            }
          </style>
          <div class="wrapper">
          ${repeat(
            array.flatMap((row, x) => row.map((cell, y) => ({cell, x, y}))),
            ({x, y}) => `${x}-${y}`,
            ({x, y, cell}) => html`<div class=${getCellClass({x, y, cell})} @click=${() => commands.guess({x,y})}>${formatter(cell)}</div>`
          )}
          </div>
          ${status !== "running" ? html`<p>you ${status}!!!!</p>` : nothing}
          <p>${timeSpend}</p>
          <button @click=${() => commands.reRun()}>Restart</button>`;
}

export { template };
