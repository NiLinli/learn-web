# ArrayBuffer

The ArrayBuffer object is used to represent a generic, fixed-length raw binary data buffer.

create view(array-like object)

- TypedArray 确定 type 的数组 view
- DataView 复合型 view

1. represents the buffer in a specific format
2. read and write the contents of the buffer

## TypedArray

- Int8Array/Uint8Array
- Uint8ClampedArray
- Int16Array/Uint16Array
- Int32Array/Uint32Array
- Float32Array
- Float64Array

1. buffer -> 
`TypedArray(buffer, byteOffset=0, length?)`
2. number ->
3. typeArray
4. arrayLikeObject