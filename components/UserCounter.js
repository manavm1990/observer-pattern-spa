class UserCounter {
  createMarkup(users) {
    return `<p>${users.length} total users.</p>`;
  }

  render({ users }, el = document.getElementById("user-counter")) {
    el.innerHTML = this.createMarkup(users);
  }
}

export default new UserCounter();
