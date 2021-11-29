
interface Subscribe {
  token: number,
  callback: Function
}

// Observer 其他形态
export class Sub implements Subscribe {
  constructor(
    public token: number,
    public callback: Function
  ) { }
}
