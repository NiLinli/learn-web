export default class Sub {
  constructor() {
    this.callbackMap = {};
  }

  on(eventName, callback) {
    if (eventName in this.callbackMap) {
      this.callbackMap[eventName].push(callback);
    } else {
      this.callbackMap[eventName] = [callback];
    }
  }

  emit(eventName, event) {
    if (!(eventName in this.callbackMap)) {
      return;
    }

    // console.log(eventName, event);

    const callbacks = this.callbackMap[eventName];

    // console.log(callbacks)

    callbacks.forEach((callback) => {
      callback(event);
    });
  }

  off(eventName, callback) {
    if (!(eventName in this.callbackMap)) return;

    const callbacks = this.callbackMap[eventName];

    const index = callbacks.find((v) => v === callback);

    if (index !== -1) {
      callbacks.splice(index, 1);
    }
  }
}
