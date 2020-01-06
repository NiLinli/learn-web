let s = 'hello';
s.toUpperCase(); // return 'HELLO'
console.log(s); // still 'hello'
// s 对应的内存中变量不能够改变，所以为不可变
// 改变 s 的值 ，只能通过重新开辟一块内存区域对应 s


// String :可以被视为 character 组成的数组，但是在Javascript中， 你可以获取每个位置上面的额 char ，但是没有办法改变

console.log(s[1]); // 可读
s[1] = 'o'; // 不可写
console.log(s); // still 'hello'

// immutable 类型 比较 === 通过value，value 相同，就相等
// Primitives(immutable) are also compared by value: two values are the same only if they have the same value. 