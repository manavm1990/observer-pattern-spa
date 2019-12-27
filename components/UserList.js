import { Component } from "../lib/classes";
import { createDivWithId } from "../lib/utils";

function createUserListMarkup(users) {
  return users.map(({ name }) => `<li>${name}</li>`).join("");
}

class UserList extends Component {
  constructor() {
    super();
  }

  createMarkup(users) {
    return `
      <ul>
        ${createUserListMarkup(users)}
      </ul>
    `;
  }

  render(elId = "user-list") {
    // Does element exist currently?
    let el = document.getElementById(elId);

    // If not, let's create it and append it to #root
    if (!el) {
      el = createDivWithId(elId);
      document.getElementById("root").appendChild(el);
    }
    el.innerHTML = this.createMarkup(this.st.users);
  }

  update() {
    this.render();
  }
}

export default new UserList();
