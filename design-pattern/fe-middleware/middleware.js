const log = console.log;
function waitExec() {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 100);
  });
}

function a(context, next) {
  log('a before');
  context.a = true;
  next();
  log('a after');
}

function b(context, next) {
  log('b before');
  context.b = true;
  next();
  log('b after');
}

function c(context, next) {
  log('c before');
  context.c = true;
  next();
  log('c after');
}

async function aa(context, next) {
  log('aa before');
  await waitExec();
  context.aa = true;
  next();
  await waitExec();
  log('aa after');
}

async function ab(context, next) {
  log('ab before');
  await waitExec();
  context.ab = true;
  next();
  await waitExec();
  log('ab after');
}

async function ac(context, next) {
  log('ac before');
  await waitExec();
  context.ac = true;
  next();
  await waitExec();
  log('ac after');
}

function end(context) {
  console.log(context);
}

module.exports = {
  a,
  b,
  c,
  aa,
  ab,
  ac,
  end,
};
