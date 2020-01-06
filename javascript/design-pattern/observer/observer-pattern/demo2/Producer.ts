export type Listener = (event: any) => any;

export class Producer {
    listeners: Listener[];

    constructor() {
        this.listeners = [];
    }

    addEventListener(listener: Listener) {
        if (typeof listener === 'function') {
            this.listeners.push(listener);
        } else {
            throw new Error('listener must be function');
        }
    }

    removeEventListener(listener: Listener) {
        this.listeners.splice(this.listeners.indexOf(listener), 1);
    }

    notify(event: any) {
        this.listeners.forEach(listener => listener(event));
    }

}