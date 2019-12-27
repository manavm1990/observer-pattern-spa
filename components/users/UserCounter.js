import { Component } from "../../lib/classes";

class UserCounter extends Component {
  constructor() {
    super();
  }

  createMarkup({ users }) {
    return `<p>${users.length} total users.</p>`;
  }
}

export default new UserCounter();
