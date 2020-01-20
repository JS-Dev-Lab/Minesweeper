import { getEngine } from "./UIEngineFactory";
import { run } from "./application/app";
import { MineArray } from "./application/mineArray";

async function main(type) {
  const createView = await getEngine(type);
  run(createView, MineArray);
}

window.console.log(process.env.Framework);
main(process.env.Framework);
