import { viewCreatorFactory } from "mvi.lit-html";
import { template } from "./template";

const element = document.getElementById("app");
const createView = viewCreatorFactory(element, template);

export { createView };
