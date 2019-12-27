import { Component } from "../lib/classes";
import { createDivWithId, createObjectFromFormIds } from "../lib/utils";

// 'extends' provides 'share method' 'update'
class AddUser extends Component {
  constructor() {
    super();
  }

  bindListeners() {
    document.querySelector("form").addEventListener("submit", e => {
      e.preventDefault();

      // Trigger proxy trap by causing a 'reassignment' via 'concat.'
      this.st.users = this.st.users.concat([
        Object.assign(
          { id: this.st.users.length + 1 },
          createObjectFromFormIds(e.target.elements)
        )
      ]);
    });
  }

  // 'Dumb' component that doesn't need 'state'.
  createMarkup() {
    return `
      <form>
        <div>
          <label for="name">Add a User</label>
          <input type="text" id="name">
        </div>

        <button>Add!</button>
      </form>
    `;
  }

  // Developer's Note: By default, all components will render in 'root'
  render(elId = "add-user") {
    const el = document.getElementById(elId) || createDivWithId(elId);
    el.innerHTML = this.createMarkup();
    document.getElementById("root").appendChild(el);

    this.bindListeners();
  }
}

export default new AddUser();
