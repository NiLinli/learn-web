// TypeScript 使用的是结构性类型系统
// 当我们比较两种不同的类型时，并不在乎它们从何处而来
// 如果所有成员的类型都是兼容的，我们就认为它们的类型是兼容的

class Man {
  constructor(public name: string, public age: number) {}
}

class Kid {
  constructor(public name: string, public age: number) {}
}

let man = new Man('nixixi', 18);
let kid = new Kid('omg', 18);

man = kid;

// 如果 filed protected & private 后, 会被认为是两个不同的结构
class Man1 {
  constructor(private name: string, public age: number) {}
}

class Kid1 {
  constructor(private name: string, public age: number) {}
}

let man1 = new Man1('nixixi', 18);
let kid1 = new Kid1('omg', 18);

// man1 = kid1;


// Empty classes have no members.
// In a structural type system, a type with no members is generally a supertype of anything else.
class Empty {}

function fn(x: Empty) {}

fn(globalThis);
fn({});
fn(fn);

export {};
