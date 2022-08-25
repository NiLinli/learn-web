import { Visitor } from './Visitor';

export interface Component {
  accept(visit: Visitor): void;
}

export class ConcreteComponentA implements Component {
  // 改造原有 class 部分
  accept(visitor: Visitor): void {
    visitor.visitConcreteComponentA(this);
  }

  exclusiveMethodOfConcreteComponentA(): string {
    return 'A';
  }
}

export class ConcreteComponentB implements Component {
  accept(visitor: Visitor): void {
    visitor.visitConcreteComponentB(this);
  }

  specialMethodOfConcreteComponentB(): string {
    return 'B';
  }
}
