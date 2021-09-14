const log = console.log;
function waitExec() {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 100);
  });
}

async function aa(context, next) {
  log('aa before');
  await waitExec();
  context.aa = true;
  await next();
  await waitExec();
  log('aa after');
}

async function ab(context, next) {
  log('ab before');
  await waitExec();
  context.ab = true;
  await next();
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('wait 5000 ms end');
      resolve();
    }, 5000);
  });
  log('ab after');
}

async function ac(context, next) {
  log('ac before');
  await waitExec();
  context.ac = true;
  await next();
  await waitExec();
  log('ac after');
}

function end(context) {
  console.log(context);
}

module.exports = {
  aa,
  ab,
  ac,
  end,
};
