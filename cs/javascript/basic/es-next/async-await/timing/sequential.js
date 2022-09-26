const resolveAfterNSeconds = require('../resolveAfterNSeconds');

async function sequentialStart() {
  const slow = await resolveAfterNSeconds(2);
  const fast = await resolveAfterNSeconds(1);

  console.log(slow + fast);
}

function sequentialStart2() {
  let slow;
  resolveAfterNSeconds(2)
    .then((_slow) => {
      slow = _slow;
      return resolveAfterNSeconds(1);
    })
    .then((fast) => {
      console.log(slow + fast);
    });
}

(async function () {
  await sequentialStart();
  sequentialStart2();
})();
