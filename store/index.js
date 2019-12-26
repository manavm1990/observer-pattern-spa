// Store will be the 'Subject' in 'Observer Pattern'
export default class Store {
  // Developer's Note: '...' rest params wraps all args into Array
  // (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
  constructor(...observers) {
    this.observers = observers;
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
