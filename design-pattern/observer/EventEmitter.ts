class EventEmitter {

  private events;

  constructor() {
    this.events = {};
  }

  on(type, handler) {

    const existing = this.events[type];

    if (existing === null) {
      this.events[type] = handler;
    }

    if (typeof existing === 'function') {
      this.events[type] = [existing, handler];
    } else {
      this.events[type].push(handler);
    }

  }

  once(type, handler) {
    this.on(type, (...args) => {
      handler.apply(this, ...args);
      // 解除绑定
      this.off(type, handler);
    });
  }

  off(type, handler) {

    const list = this.events[type];

    if (!list) return this;

    if (list === handler) {
      delete this.events[type];
    } else if (typeof list !== 'function') {
      const index = list.indexOf(handler);
      if (index !== -1) list.splice(index, 1);
    }

    return this;
  }

  emit(type, ...args) {
    const handler = this.events[type];
    if (handler === undefined) return;

    if (typeof handler === 'function') {
      handler.apply(this, args);
    } else {
      handler.forEach(func => {
        func.apply(this, args);
      });
    }
    return this;
  }
}