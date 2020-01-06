interface Pubsub {
    topics: any;  // 存储 topic , 根据 topic 订阅或者推送
    subUid: number;  // 某次订阅的标志性符
    publish: any;   // 对 订阅了此 topic 的 订阅者进行推送
    subscribe: any; // 订阅 topic
    unsubscribe: any;  // 取消订阅 topic
}

export type SubscriberFunc = (topic: string, args: any) => any;

export class Subscriber {
    constructor(
        public token: string,
        public func: SubscriberFunc
    ) { }
}

export let pubsub: Pubsub = {

    topics: {},
    subUid: -1,

    publish: function (topic: string, args: any): any {

        if (!this.topics[topic])
            return false;

        let subscribers: Subscriber[] = this.topics[topic],
            len = subscribers ? subscribers.length : 0;

        // Publisher publish topic
        while (len--) {
            subscribers[len].func(topic, args); // Subscriber Fire Event
        }

        return this;
    },

    subscribe: function (topic: string, func: SubscriberFunc): string {
        if (!this.topics[topic]) {
            this.topics[topic] = [];
        }

        let token = (++this.subUid).toString();

        this.topics[topic].push(new Subscriber(token, func)); // Subscriber subscribe
        return token;
    },


    unsubscribe: function (token: string): string | undefined {
        for (let topic in this.topics) {
            if (this.topics[topic]) {
                for (let i = 0, j = this.topics[topic].length; i < j; i++) {
                    if (this.topics[topic][i].token === token) {
                        this.topics[topic].splice(i, 1);
                        return token;
                    }
                }
            }
        }
    }

};












