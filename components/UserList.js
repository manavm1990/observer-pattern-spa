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
    const el = document.getElementById(elId) || createDivWithId(elId);
    el.innerHTML = this.createMarkup(this.st.users);
    document.getElementById("root").appendChild(el);
  }

  update(data) {
    return data;
  }
}

export default new UserList();
