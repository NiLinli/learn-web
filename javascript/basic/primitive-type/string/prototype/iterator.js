String.prototype[Symbol.iterator] = function () {
  const length = this.length;
  let index = 0;
  let currentValue;

  return {
    next: () => {
      if (index >= length) {
        return {
          value: undefined,
          done: true,
        };
      }

      // UBMP
      let first = this.charCodeAt(index);
      if (first >= 0xd800 && first <= 0xdbff && index + 1 < length) {
        let second = this.charCodeAt(index + 1);
        if (second >= 0xdc00 && second <= 0xdfff) {
          currentValue = String.fromCharCode(first, second);
          index += 2;
        }
      } else {
        // BMP
        currentValue = this[index];
        index += 1;
      }
      return {
        value: currentValue,
        done: false,
      };
    },
  };
};

const str = '😈000😈';

for (const char of str) {
  console.log(char);
}
