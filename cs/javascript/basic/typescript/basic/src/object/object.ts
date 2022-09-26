//  object type: property set.
interface PersonInterface {
  name: string;
  age: number;
}

type PersonType = {
  name: string;
  age: number;
};

function greetAnonymous(person: { name: string; age: number }) {
  return 'Hello ' + person.name;
}

function greet(person: PersonInterface) {
  return 'Hello ' + person.name;
}

function greetType(person: PersonType) {
  return 'Hello ' + person.name;
}

// optional properties modifier
interface PaintOptions {
  xPos?: number;
  yPos?: number;
}

// 默认值
function paintShape({ xPos = 0, yPos = 0 }: PaintOptions) {}

// 默认赋值
function paintShape2(opts: PaintOptions) {
  const xPos = typeof opts.xPos === 'undefined' ? 0 : opts.xPos;
}


// readonly properties modifier
let p: {
  readonly x: number;
  readonly y: number;
} = {
  x: 123,
  y: 456,
};

// p.x = 999;

export {};
