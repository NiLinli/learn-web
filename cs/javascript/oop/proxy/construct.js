class Service {
  constructor() {
    this.name = 'Service';
  }

  doSomething() {}
}

let _singletonPerson = null;

const PersonProxy = new Proxy(Service, {
  construct(target, args, newTarget) {
    console.log('[handler.construct]');
    if (_singletonPerson === null) {
      _singletonPerson = Reflect.construct(target, args, newTarget);
    }
    return _singletonPerson;
  },
});

const person1 = new PersonProxy();

const person2 = new PersonProxy();

console.log(person1 === person2);
