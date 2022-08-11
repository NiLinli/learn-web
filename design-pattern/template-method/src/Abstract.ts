export abstract class AbstractClass {
  templateMethod(): void {
    this.baseOperation1();
    this.requiredOperation1();
    this.baseOperation2();
    this.hook1();
    this.requiredOperation2();
    this.baseOperation3();
    this.hook2();
  }

  // 可选步骤
  protected baseOperation1(): void {
    console.log('AbstractClass says: I am doing the bulk of the work');
  }

  protected baseOperation2(): void {
    console.log('AbstractClass says: But I let subclasses override some operations');
  }

  protected baseOperation3(): void {
    console.log('AbstractClass says: But I am doing the bulk of the work anyway');
  }

  // 抽象步骤
  protected abstract requiredOperation1(): void;
  protected abstract requiredOperation2(): void;

  // 钩子
  protected hook1(): void {}
  protected hook2(): void {}
}
