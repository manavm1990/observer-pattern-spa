import { Component } from "../lib/classes";
import { createDivWithId } from "../lib/utils";

class UserCounter extends Component {
  constructor() {
    super();
  }

  createMarkup(users) {
    return `<p>${users.length} total users.</p>`;
  }

  render(elId = "user-counter") {
    const el = document.getElementById(elId) || createDivWithId(elId);
    el.innerHTML = this.createMarkup(this.st.users);
    document.getElementById("root").appendChild(el);
  }
}

export default new UserCounter();
