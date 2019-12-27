import * as state from "./store";
import * as components from "./components";

state.Users.addObserver(components.UserList, components.UserCounter);

// Rendered markup order is dependent on the order in which these fxns. are invoked.
components.UserList.render(state.Users, "user-list");
components.UserCounter.render(state.Users, "user-counter");
components.AddUser.render("add-user");
