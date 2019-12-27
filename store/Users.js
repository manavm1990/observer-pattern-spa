import { Subject } from "../lib/classes";

class Users extends Subject {
  constructor() {
    super();
    this.users = [
      {
        id: 1,
        name: "Jennifer"
      },
      {
        id: 2,
        name: "Jane"
      },
      {
        id: 3,
        name: "John"
      }
    ];
  }

  update({ k, v }) {
    this[k] = v;
    this.notify(this);
  }
}

export default new Users();
