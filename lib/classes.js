export class Component {
  constructor() {
    // This will be replaced with a 'proxy state.'
    this.st = {};
  }

  set proxySt(st) {
    this.st = st;
  }

  update(data) {
    return `
      ${this} got updated with the following data: ${data}.
      This method needs to be overridden by an 'own' implementation."
    `;
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

  addObserver(obs) {
    this.observers.push(obs);
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
