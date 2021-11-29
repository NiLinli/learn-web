type Events = {
  [key: string]: Function | Function[];
};


export class EventEmitter {

  public events: Events = {};

  constructor() {
    this.events = {};
  }

  on(type: string, handler: Function): Function {

    const existing = this.events[type];

    if (!existing) {
      this.events[type] = handler;

    } else if (typeof existing === 'function') {
      this.events[type] = [existing, handler];
    } else {
      (this.events[type] as Function[]).push(handler);
    }


    return () => {
      this.off(type, handler);
    }

  }

  once(type: string, handler: Function) {

    const _self = this;
    this.on(type, function wrapperHandler(...args: any) {
      handler.apply(_self, args);

      // 解除绑定
      _self.off(type, wrapperHandler);
    });
  }

  off(type: string, handler: Function) {

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

  emit(type: string, ...args: any) {
    const handler = this.events[type];
    if (handler === undefined) return;

    if (typeof handler === 'function') {
      handler.apply(this, args);
    } else {
      // once 会改变数组
      const cloneHandler = handler.slice(0, handler.length);
      cloneHandler.forEach(func => {
        func.apply(this, args);
      });
    }
    return this;
  }
}