// 接口 继承接口
interface Common {
  name: string;
}

interface ClockInterface extends Common {
  currentTime: Date;
}

// 实现接口，可以实现多个接口
class Clock implements ClockInterface {
  name: string;
  currentTime: Date;
  constructor(h: number, m: number) {
    this.currentTime = new Date();
    this.name = '';
  }
}

export {};
