import { createDivWithId } from "../lib/utils";

class UserCounter {
  createMarkup(users) {
    return `<p>${users.length} total users.</p>`;
  }

  render({ users }, elId = "user-counter") {
    const el = document.getElementById(elId) || createDivWithId(elId);
    el.innerHTML = this.createMarkup(users);
    document.getElementById("root").appendChild(el);
  }
}

export default new UserCounter();
