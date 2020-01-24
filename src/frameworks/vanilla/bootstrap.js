import { viewCreatorFactory } from "mvi.vanilla";
import { render } from "./render";

const element = document.getElementById("app");
const style = document.createElement('style');
style.type = 'text/css';
style.appendChild(document.createTextNode(`
.cell {
  display: flex;
  justify-content: center;
  align-items: center;
  text-weight: bold;
  font-size: 20px;
}
.cell.unseen {
  background: lightgrey;
}
.cell.mine.seen {
  background: red;
  color: black;
}
.cell.number-1 {
  color: blue;
}
.cell.number-2 {
  color: green;
}
.cell.number-3 {
  color: red;
}
.cell.number-4 {
  color: orange;
}
.cell.number-5 {
  color: yellow;
}
.cell.number-6 {
  color: black;
}
.cell.number-7 {
  color: purple;
}`));
const head = document.getElementsByTagName('head')[0];
head.appendChild(style);

const createView = viewCreatorFactory(element, render);

export { createView };
