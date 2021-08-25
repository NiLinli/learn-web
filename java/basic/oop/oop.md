# Oriented object programming

Object = 属性 + 服务(方法)

数据 + 数据操作 --> 封装

程序就是对于需求的一种计算机语言的描述

人机交互(UI) 和 业务逻辑 分离

## 特性

- 封装
- 继承
- 多态

### 继承

继承设计概述:

1. 找出具有共同属性和行为的变量
2. 设计代表共同行为和状态的类（父类)
3. 决定子类是否需要让某种行为（也就是方法的实现）有特定不同的运作方式
4. 通过寻找使用共同行为的子类来找出更多的抽象化机会，以完成类的继承层次

调用方法: 向上寻找法  
继承时要通过Is-A测试(单向关系), 而不是Has-A

意义:

- 避免了重复的代码，而且便于修改，修改程序时，不需要修改每一个子类，修改父类，所有子类都会发生相同的变化。
- 定义共同的协议。例如抽象类与接口。

覆盖(子类覆盖父类的方法):

- 存储权限相同或者开放  
- 返回类型一样或为其返回类型的子类  
- 参数必须相同

重载(区别于覆盖，与继承与多态无关):

- 参数必须不相同  
- 返回类型可以不同  
- 权限可任意更改

### 多态

- 运用多态时，引用类型可以是实际对象类型的父类。`Animal dog=new Dog();`  

- 参数和返回类型也可以多态。 

```java
puclic void giveShot(Animal a){
	a.makeNoise();
}		//这个函数子类都可以用，这种写法是多态的重要应用。

	Dog d=new Dog();
	giveShot(d);	//Animal a=d=new Dog();
```

3.多态的应用：
将参数声明为父类的类型，运行时传入任何子类的对象，可以达到写一个父类方法，子类都可以用。通过多态，引进新子类时也不必修改程序。

4.向下转型：
```
public class TestObject
{
	public static void main(String[] args){
		ShengWu p1=new People();
		p1.sing();        //p1虽然指向People,但是运用了多态，					引用变量为ShengWu，遥控器按钮少
		People p2=(People)p1; //向下转型
		p2.sing();	
	}
}

class People extends ShengWu
{
	void sing(){
		System.out.println("PEOPLE  sing songs");
	}
}

class ShengWu
{
	void eat(){
		System.out.println("ShengWu eat");
	}
}
```
这个时候必须向下转型。

1.参数的多态：
```
   public static void function(Animal a)  
    {  
        a.eat();  
        //用于子类型有限  
        //或判断所属类型进而使用其特有方法  
        if(a instanceof Cat)  
        {  
            Cat c = (Cat)a;  
            c.catchMouse();  
        }  
        else if(a instanceof Dog)  
        {  
            Dog c = (Dog)a;  
            c.kanJia();  
        }  
    }   
```

### 接口

#### 抽象类

防止类被初始化，避免建立对象,用于被继承。  

```java
abstract class Canine extends Animals{
	public void roam(){}
}
```

#### 抽象方法

--抽象方法没有实体。  
    `public abstract void eat();`  
--具体累继承时必须要实现抽象方法，然而抽象类继承抽象类的时候无需实现抽象方法，抽象机制是将负担转给下层的具体的类。  
--注：类中只要有抽象方法就必须为抽象类。  
--非抽象方法在抽象与非抽象的类中没有差别，在处理这些问题上面。
意义：定义一组子型共有的协议，为了标记出多态而存在。

#### Object类

equals(Object o) 判断两个对象是否相等。  
getClass()  获取对象是被哪个类初始化的。  
hashCode()  获取对象的哈希代码，这是对象唯一的ID。  
toString()  列出类的名称和一个我们不关心的数字。  

#### interface  

```
interface Animal           
{
	abstract void eat();    //接口方法是public和abstract的，							两者都可以省略
}
```

接口的意义：多态

- 以接口取代具体的子类或者抽象的父类作为参数或者返回类型，可以传入任何有实现该接口的东西
- 大部分良好的设计也不需要在抽象的层次定义出细节，所需的只是个共同的合约定义，让细节在具体的子类实现。

## MVC

数据, 表现, 控制

- Model 模型
- View  视图
- Controller 控制器

Model:

1. 保存和维护数据, 提供接口让外部修改数据
2. 通知表现需要更新

View:

1. 从 Model 获得数据, 更新视图

Controller:

1. 监听用户输入, 根据输入调整数据
