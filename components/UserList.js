function createUserListMarkup(users) {
  return users.map(({ name }) => `<li>${name}</li>`).join("");
}

class UserList {
  createMarkup(users) {
    return `
      <ul>
        ${createUserListMarkup(users)}
      </ul>
    `;
  }

  render({ users }, el = document.getElementById("root")) {
    el.innerHTML = this.createMarkup(users);
  }

  update(data) {
    return data;
  }
}

export default new UserList();
