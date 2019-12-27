import * as state from "./store";
import * as components from "./components";

import kebabCase from "lodash.kebabcase";

// Create <div> for each component inside of root.
document.getElementById("root").innerHTML = Object.keys(components)
  .map(component => `<div id="${kebabCase(component)}"></div>`)
  .join("");

components.UserList.render(state.Users);
components.UserCounter.render(state.Users);
