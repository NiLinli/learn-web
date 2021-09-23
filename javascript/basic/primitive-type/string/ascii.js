// 0 - 127

// 0x00-0x7F

// 0x00 NULL => '\0'
// 0x30 digital
// 0x41 A
// 0x61 a

function printASCIIcode() {
  let arr = [];
  for (let i = 0; i <= 0x7F; i++) {
    arr.push({
      hex: '0x' + i.toString(16),
      char: String.fromCharCode(i),
    });
  }

  console.table(arr);
}


printASCIIcode();
