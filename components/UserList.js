import { Component } from "../lib/classes";

function createUserListMarkup(users) {
  return users.map(({ name }) => `<li>${name}</li>`).join("");
}

class UserList extends Component {
  constructor() {
    super();
  }

  createMarkup({ users }) {
    return `
      <ul>
        ${createUserListMarkup(users)}
      </ul>
    `;
  }
}

export default new UserList();
