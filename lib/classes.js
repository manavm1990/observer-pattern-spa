import { createDivWithId } from "./utils";

import kebabcase from "lodash.kebabcase";

export class Component {
  constructor() {
    // This will be replaced with a 'proxy state.'
    this.st = {};
  }

  set proxySt(st) {
    this.st = st;
  }

  render() {
    // Get the name of this component and use kebab-case for the id's value.
    const id = kebabcase(this.constructor.name);

    // Does element with id exist currently?
    let el = document.getElementById(id);

    // If not, let's create it and append it to #root
    if (!el) {
      el = createDivWithId(id);
      document.getElementById("root").appendChild(el);
    }
    el.innerHTML = this.createMarkup(this.st);
  }

  update(data) {
    this.render(data);
  }
}

export class Subject {
  // Developer's Note: '...' rest params wraps all args into Array
  // (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
  constructor() {
    this.observers = [];
  }

  get observersList() {
    return this.observers.map((observer, i) => `${i} - ${observer}`);
  }

  addObserver(...obs) {
    this.observers = this.observers.concat(obs);
  }

  notify(data) {
    if (this.observers.length) {
      this.observers.forEach(observer => observer.update(data));
    }
  }

  removeObserver(obs) {
    const obsI = this.observers.indexOf(obs);

    if (obsI === -1) {
      return `Observer, ${obs} not found. Nothing removed.`;
    }

    this.observers.splice(obsI, 1);

    return `Observer: ${obs} removed from index ${obsI}`;
  }
}
