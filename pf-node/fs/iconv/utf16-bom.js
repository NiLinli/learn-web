function removeUtf16Bom(buf) {
  const length = buf.length;
  const withOutBomBuffer = Buffer.alloc(length - 2, 0);
  buf.copy(withOutBomBuffer, 0, 2, length);

  return withOutBomBuffer;
}

function addUtf16Bom(buf, endian = 'le') {
  // const bomBuf = Buffer.alloc(2, 0);

  // if (endian === 'le') {
  //   // 0xFF 0xFE
  //   bomBuf.writeUInt8(0xff, 0);
  //   bomBuf.writeUInt8(0xfe, 1);
  // } else {
  //   // 0xFE 0xFF
  //   bomBuf.writeUInt8(0xfe, 0);
  //   bomBuf.writeUInt8(0xff, 1);
  // }
  // return Buffer.concat([bomBuf, buf]);

  const bomArr = endian === 'le' ? [0xff, 0xfe] : [0xfe, 0xff];

  return Buffer.concat([Buffer.from(bomArr), buf]);
}

module.exports = {
  removeUtf16Bom,
  addUtf16Bom,
};
