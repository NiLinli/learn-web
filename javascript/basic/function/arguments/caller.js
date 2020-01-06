// caller 调用此函数的函数

function a() {
  console.log(a.caller);
}

function b() {
  a();
}

function c() {
  b();
}

c();

function whoCalled() {
  if (whoCalled.caller == null) {
    console.log('I was called from global scope');
  } else {
    console.log(whoCalled.caller + 'call me');
  }
}

whoCalled();

function d() {
  whoCalled();
}

function e() {
  d();
}

e();