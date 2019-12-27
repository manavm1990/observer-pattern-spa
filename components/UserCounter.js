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

export default new UserCounter();
