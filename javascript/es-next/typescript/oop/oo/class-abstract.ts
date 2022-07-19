// 1. 抽象类做为其它派生类的基类使用
// 2. 它们一般不会直接被实例化
// 3. 不同于接口，抽象类可以包含成员的实现细节

abstract class Department {

    constructor(public name: string) {
    }

    printName(): void {
        console.log('Department name: ' + this.name);
    }

    abstract printMeeting(): void; // 必须在派生类中实现, 类似于接口
}

// 使用 extends 继承抽象类
// 1. 继承了抽象类中的方法
// 2. 实现抽象类的抽象方法
// 3. 添加的多的方法实例无法访问(添加的方法可用于函数内部运算)
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

let department: Department; // 允许创建一个对抽象类型的引用
// department = new Department(); // 错误: 不能创建一个抽象类的实例

department = new AccountingDepartment(); // 允许对一个抽象子类进行实例化和赋值
department.printName();
department.printMeeting();
// department.generateReports(); // 错误: 方法在声明的抽象类中不存在