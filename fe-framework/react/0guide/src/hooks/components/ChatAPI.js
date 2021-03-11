import Sub from './sub';

export default {
  sub: new Sub(),
  itervalIds: {},
  // message
  subscribeToFriendMessage(id, callback) {
    const eventName = 'message' + id;
    this.sub.on(eventName, callback);
    // 模拟 emit
    this.itervalIds[id] = setInterval(() => {
      this.sub.emit(eventName, 'receive message from id = ' + id + ' timestamp = ' + new Date().valueOf());
    }, 2000);
  },

  unsubscribeFromFriendMessage(id, callback) {
    const eventName = 'message' + id;
    this.sub.off(eventName, callback);
    window.clearInterval(this.itervalIds[id]);
    delete this.itervalIds[id];
  },
  // status
  subscribeToFriendStatus(id, callback) {
    const eventName = 'status' + id;
    this.sub.on(eventName, callback);
    // 模拟 emit
    this.itervalIds[id] = setInterval(() => {
      this.sub.emit(eventName, Math.floor(Math.random() * 10) + 1 > 5);
    }, 2000);
  },

  unsubscribeFromFriendStatus(id, callback) {
    const eventName = 'status' + id;
    this.sub.off(eventName, callback);
    window.clearInterval(this.itervalIds[id]);
    delete this.itervalIds[id];
  },
};
