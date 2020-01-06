// ES5 provide getter/setter override the default [[Get]] or [[Put]]
// per-property level , not object level

// accessor properties

// ignore value and writable
// configurable
// enumerable

let book = {
  edition: 1
};

Object.defineProperty(book, 'year', {
  enumerable: true,
  get: function () {
    return this._year || 2018;
  },
  set: function (newValue) {
    if (newValue > 2018) {
      this._year = newValue;
      this.edition = newValue - 2018;
    }
  }
});

for (const k in book) {
  console.log(k);
}

delete book.year;

book.year = 2020;
console.log(book.year);

// 删除setter getter
// delete book.year;

// 后期添加 setter getter
// Object.defineProperty(book, 'content', { set: function (x) { this.a = x / 2; } });
// Object.defineProperty(book, 'content', { get: function () { return x; } });