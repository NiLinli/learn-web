const resolveAfterNSeconds = require('../resolveAfterNSeconds');

async function concurrentStart() {
  const slowP = resolveAfterNSeconds(2);
  const fastP = resolveAfterNSeconds(1);

  console.log(await slowP);
  console.log(await fastP);
}

function concurrentStart2() {
  const slowP = resolveAfterNSeconds(2);
  const fastP = resolveAfterNSeconds(1);

  slowP
    .then((slowValue) => {
      console.log(slowValue);
      return fastP;
    })
    .then((fastValue) => {
      console.log(fastValue);
    });
}

(async function () {
  await concurrentStart();
  concurrentStart2();
})();
