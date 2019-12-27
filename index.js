import * as state from "./store";
import * as components from "./components";

state.Users.addObserver(components.UserList, components.UserCounter);

const usersProxy = new Proxy(state.Users, {
  set(_, k, v) {
    state.Users.update({ k, v });
    return true;
  }
});

// Components will only manage 'proxy' state.
components.AddUser.proxySt = usersProxy;
components.UserCounter.proxySt = usersProxy;
components.UserList.proxySt = usersProxy;

// Rendered markup order is dependent on the order in which these fxns. are invoked.
components.UserList.render();
components.UserCounter.render();
components.AddUser.render();
