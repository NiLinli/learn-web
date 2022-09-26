// 抽象 fields 和 method 必须在 抽象类中
// 抽象类不能实例化, 作为基类去被继承
abstract class Department {
  constructor(public name: string) {}

  printName(): void {
    console.log('Department name: ' + this.name);
  }

  // 必须在派生类中实现, 类似于接口
  abstract printMeeting(): void;
}

// 1.
// 2.
// 3.
class AccountingDepartment extends Department {
  constructor() {
    super('Accounting and Auditing'); // 在派生类的构造函数中必须调用 super()
  }

  printMeeting(): void {
    console.log('The Accounting Department meets each Monday at 10am.');
    this.generateReports();
  }

  // private
  generateReports(): void {
    console.log('Generating accounting reports...');
  }
}

const department: Department = new AccountingDepartment();

// 继承了抽象类中的方法
department.printName();
// 实现抽象类的抽象方法
department.printMeeting();
// 派生类新增方法等同于 private, 外部不可以访问
// department.generateReports();

export {};
