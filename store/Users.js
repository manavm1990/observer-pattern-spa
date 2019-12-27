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
}

export default new Users();
