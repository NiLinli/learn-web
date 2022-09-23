// ES5 provide getter/setter override the default [[Get]] or [[Put]]
// per-property level , not object level
// accessor properties
// value &  writable 无法与 accessor properties 同时定义

const book = {
  edition: 1,
};

Object.defineProperty(book, 'year', {
  enumerable: true,
  configurable: true,
  // TypeError: Invalid property descriptor. Cannot both specify accessors and a value or writable attribute, #<Object>
  // value: '1994',
  // writable: true,
  get: function () {
    return this._year || 2018;
  },

  set: function (newValue) {
    if (newValue > 2018) {
      this._year = newValue;
      this.edition = newValue - 2018;
    }
  },
});

for (const k in book) {
  console.log(k);
}

console.log(book.year);

// two nonstandard
// Internet Explorer 8, Firefox 4+, Safari 5+, Opera 12+, and Chrome
// var book = {
//   _year: 2014,
//   edition: 1
// };

// book.__defineGetter__('year', function() {
//   return this._year;
// })

// book.__defineSetter__('year', function(newYear) {
//   if (newYear > 2014) {
//     this._year = newYear;
//     this.edition = newYear - 2014;
//   }
// });
