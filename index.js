import * as state from "./store";
import * as components from "./components";

state.Users.addObserver(components.UserList, components.UserCounter);

// Components will only manage 'proxy' state.
components.UserCounter.proxySt = usersProxy;
components.UserList.proxySt = usersProxy;

// Rendered markup order is dependent on the order in which these fxns. are invoked.
components.UserList.render();
components.UserCounter.render();
components.AddUser.render();
