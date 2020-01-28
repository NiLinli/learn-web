import { Observer } from './observer';
import { Subject } from './subject';


class ConcreteObserverOfGod implements Observer {
    constructor(
        public name: string,
        public id: number
    ) { }

    update(message: any) {
        console.log(`Observer ${this.name} will be update , recieve message --- ${message}`);
    }

    sayHello() {
        console.log(`it can have other method`);
    }
}

class ConcreteSubjectOfGod extends Subject {
    constructor() {
        super();
    }

    sayHello() {
        console.log(`it can have other method`);
    }
}


let observer1: ConcreteObserverOfGod = new ConcreteObserverOfGod('nixixi111', 0),
    observer2: ConcreteObserverOfGod = new ConcreteObserverOfGod('nixixi222', 1);


let subject: ConcreteSubjectOfGod = new ConcreteSubjectOfGod();
subject.addObserver(observer1);
subject.addObserver(observer2);


subject.notify('give me some money to change my keyboard');

