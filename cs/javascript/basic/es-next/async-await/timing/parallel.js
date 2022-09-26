const resolveAfterNSeconds = require('../resolveAfterNSeconds');

async function parallel() {
  (async function () {
    const slow = await resolveAfterNSeconds(2);
    console.log(slow);
  })();

  (async function () {
    const fast = await resolveAfterNSeconds(1);
    console.log(fast);
  })();
}

function parallel2() {
  resolveAfterNSeconds(2).then((slow) => console.log(slow));
  resolveAfterNSeconds(1).then((fast) => console.log(fast));
}

(async function () {
  await parallel();
  parallel2();
})();
