import { Producer,Listener } from './Producer';

let eggHead = new Producer();

let handler1:Listener = function handler1(event) {
    console.log(`${event} from handler1`);
};

let handler2:Listener = function handler2(event) {
    console.log(`${event} from handler2`);
};

eggHead.addEventListener(handler1);

eggHead.addEventListener(handler2);

// notify
eggHead.notify('omg');


// 事件(event) 和 监听器 (listener) 去耦合