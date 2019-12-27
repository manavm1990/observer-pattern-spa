import { createDivWithId, getFormDataFromIds } from "../lib/utils";

// 'extends' provides 'share method' 'update'
class AddUser {
  // 'Dumb' component that doesn't need 'state'.
  createMarkup() {
    return `
      <form>
        <div>
          <label for="user">Add a User</label>
          <input type="text" id="user">
        </div>

        <button>Add!</button>
      </form>
    `;
  }

  bindListeners() {
    document.querySelector("form").addEventListener("submit", e => {
      e.preventDefault();

      /**
       * Get the 'form data.'
       * Get state.
       * Update state.
       */
    });
  }

  // Developer's Note: By default, all components will render in 'root'
  render(elId = "add-user") {
    const el = document.getElementById(elId) || createDivWithId(elId);
    el.innerHTML = this.createMarkup();
    document.getElementById("root").appendChild(el);
  }
}

export default new AddUser();
