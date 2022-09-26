function ajax(url, cb) {

  setTimeout(() => {
    cb(null, { code: 10000, message: 'Omg six' });
  }, 2000);
}

function foo(x, y) {
  ajax(
    'http://some.url.1/?x=' + x + '&y=' + y,
    function (err, data) {
      if (err) {
        // throw an error into `*main()`
        it.throw(err);
      }
      else {
        // resume `*main()` with received `data`
        it.next(data);
      }
    }
  );
}

function* main() {
  try {
    var text = yield foo(11, 31);
    console.log(text);
  }
  catch (err) {
    console.error(err);
  }
}

var it = main();
it.next();