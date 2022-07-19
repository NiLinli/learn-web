// 普通属性
interface Box {
  height: number;
  width: number;
}

interface Box {
  scale: number;
}

// 等同于
// interface Box {
//   height: number;
//   width: number;
//   scale: number;
// }

let box: Box = {
  height: 5,
  width: 6,
  scale: 10
}

// 属性为函数
interface Document {
  createElmemt(tagName: any): Element;
}

interface Document {
  createElement(tagName: 'div'): HTMLDivElement;
  createElement(tagName: 'span'): HTMLSpanElement;
}

interface Document {
  createElement(tagName: string): HTMLElement;
  createElement(tagName: 'canvas'): HTMLCanvasElement;
}

interface Document {
  // 1. 后面的声明在上
  // 2. 又一个参数是 string 的提升到最上面
  createElement(tagName: 'canvas'): HTMLCanvasElement;
  createElement(tagName: 'span'): HTMLSpanElement;
  createElement(tagName: 'div'): HTMLDivElement;
  createElement(tagName: string): HTMLElement;
  createElmemt(tagName: any): Element;
}



// interface 描述 函数时候不考虑声明合并