// object 范型: 并没有什么两个值之间的关系强调的, 复用 interface

interface Box<Type> {
  contents: Type;
}

type FakeBox<Type> = {
  contents: Type;
};

function setContents<Type>(box: Box<Type>, newContents: Type) {
  box.contents = newContents;
}

interface Apple {}

type AppleBox = Box<Apple>;
type StringBox = Box<string>;
