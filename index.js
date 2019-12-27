import * as state from "./store";
import { AddUser, UserCounter, UserList } from "./components/users";

state.Users.addObserver(UserList, UserCounter);

const usersProxy = new Proxy(state.Users, {
  set(_, k, v) {
    state.Users.update({ k, v });
    return true;
  }
});

// Components will only manage 'proxy' state.
AddUser.proxySt = usersProxy;
UserCounter.proxySt = usersProxy;
UserList.proxySt = usersProxy;

// Rendered markup order is dependent on the order in which these fxns. are invoked.
UserList.render();
UserCounter.render();
AddUser.render();
