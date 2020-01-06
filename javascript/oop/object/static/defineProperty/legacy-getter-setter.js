// two nonstandard
// Internet Explorer 8, Firefox 4+, Safari 5+, Opera 12+, and Chrome

var book = {
  _year: 2014,
  edition: 1
};

book.__defineGetter__('year', function() {
  return this._year;
})

book.__defineSetter__('year', function(newYear) {
  if (newYear > 2014) {
    this._year = newYear;
    this.edition = newYear - 2014;
  }
});