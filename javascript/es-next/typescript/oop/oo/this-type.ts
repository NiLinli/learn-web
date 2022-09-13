// this type
class Box {
  content = '';

  // this 不同于 Box
  // 可以被继承
  sameAs(other: this) {
    return other.content === this.content;
  }
}

class DerivedBox extends Box {
  otherContent = '?';
}

const box = new Box();
const derivedBox = new DerivedBox();
// this -> DerivedBox
// derivedBox.sameAs(box);

// this is type
// 辅助 type narrowing, 调用实例上面的方法, 判断实例的类型
class FileSystemObject {
  constructor(public path: string, private networked: boolean) {}

  // isFile() 返回 true, 当前对象类型 FileRep
  isFile(): this is FileRep {
    return this instanceof FileRep;
  }
  isDirectory(): this is Directory {
    return this instanceof Directory;
  }
  isNetworked(): this is this & Networked {
    return this.networked;
  }
}

class FileRep extends FileSystemObject {
  constructor(path: string, public content: string) {
    super(path, false);
  }

  delete() {}
}

class Directory extends FileSystemObject {
  children!: FileSystemObject[];
}

interface Networked {
  host: string;
}

const fso: FileSystemObject = new FileRep('foo/bar.txt', 'foo');

// type narrow
if (fso.isFile()) {
  // this is FileRep -> fso is FileRep
  fso.delete();
}


// lazy validation
class WrappedValue<T> {
  value?: T;
  hasValue(): this is { value: T } {
    return this.value !== undefined;
  }
}

const wValue = new WrappedValue();
wValue.value = 123;

// value 是可选的
wValue.value;

if (wValue.hasValue()) {
  // wValue 类型被指定了
  wValue.value
}

export {};
