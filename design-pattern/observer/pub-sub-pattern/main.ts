import { Pub } from './src/Publish';
import { EventEmitter } from './src/EventEmitter';

const pub = new Pub();

const token1 = pub.subscribe('nba', function (news: any) {
  console.log(news, 1)
});

const token2 = pub.subscribe('nba', function (news: any) {
  console.log(news, 2)
});

const token3 = pub.subscribe('nba', function (news: any) {
  console.log(news, 3)
});

const token4 = pub.subscribe('football', function (...args: any) {
  console.log.apply(null, args)
});


pub.publish('nba', 'T-Mac is comming back');
pub.unsubscribe(token2);
pub.publish('nba', 'T-Mac is comming back');

pub.publish('football', '7', '11')


// EventEmitter
const ee = new EventEmitter();

ee.on('nba', function (news: any) {
  console.log(news, 1)
})

ee.once('nba', function acceptNba2(news: any) {
  console.log(news, 2)
});

const handler = function (news: any) {
  console.log(news, 3)
}

ee.on('nba', handler);


ee.emit('nba', 'T-Mac is comming back');

// once
ee.emit('nba', 'T-Mac is comming back');

// off
ee.off('nba', handler)
ee.emit('nba', 'T-Mac is comming back');

// multi args
ee.on('football', (...args: any) => {
  console.log.apply(null, args)
})

ee.emit('football', 1, 3, 4, 5, 5)

const off = ee.on('tennis', () => {
  console.log('tennis');
})

ee.emit('tennis');

off();

ee.emit('tennis');