# Oriented object programming

Object = 属性 + 方法

- 封装: 数据 + 数据操作
- 继承
- 多态

- 栈stack: 方法调用及变量生存空间
- 栈heap: 对象的生存空间堆

## annotation

- Information for the compiler — Annotations can be used by the compiler to detect errors or suppress warnings.
- Compile-time and deployment-time processing — Software tools can process annotation information to generate code, XML files, and so forth.
- Runtime processing — Some annotations are available to be examined at runtime.

## anonymous

代码简洁 不用声明多余的类名
声明 & 实例在同一时刻  
匿名类 基于父类去创建子匿名类  

Lambda expressions 匿名函数表达式

匿名类只有一个 method, 匿名类也不会很方便

将函数作为一个参数传递到另外一个参数 
适用 Lambda expressions 可以实现
Lambda expressions 表示表示为一个类, 右边的函数为类的唯一的函数

匿名了类 & 匿名了函数

## interface


## inheritance

Object 没有 superclass
其他 class 都有并且唯一 superclass, 隐式的 Object 或者显式的 extends

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

## 多态

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

## 接口

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













# static #
1.静态变量（类变量）：对所有实例来说都相同，所有实例共享一个。  
Java虚拟机加载class：  
--创建该类的新实例（对象）；  
--使用该类的静态方法或者变量。  
so静态项目初始化两个保证：静态变量会在任何对象创建之前初始化，在任何静态方法执行之前初始化。  
 
静态方法不能调用非静态变量。

2.final  
--final变量代表不能改变值；  
--final的method代表你不能覆盖掉该method；  
--final的类代表你不能继承该类。  
静态的final变量是常量，所有共有一个。

## 生命周期 ##
1.局部变量只会存活在声明该变量的方法中。  

2.实例变量寿命与对象寿命相同。  

3.引用变量：如果对象唯一的引用死了，对象就会被回收。  
--没有被引用的对象的没有任何意义。  
--3种方法可以释放对象的引用  
<pre>
void go(){
	Life z=new Life();  //z会在方法结束时消失
}

Life z=new Life();
z=new Life();  //第一个对象会在z被赋值到新的对象时挂掉


Life z=new Life();
z=null;
</pre>



## Exception

- 异常是一种 Exception 的对象
- 在编写可能抛出异常的方法时，必须声明有异常
<pre>
public void takeRisk() throws BadException {

}


public void crossFinger(){
	try{
		anObject.takeRisk();
	}
	catch (BadException ex){
		//遇到异常catch接受 执行语句 
	}
	finally{
		//一定要执行
	}
}
</pre>
--可以抛出多个异常，catch多个异常。  
--异常是多态的。  
(1)以异常的父型来声明会抛出的异常；throws FatherException  
(2)以所抛出的异常父型来catch异常；catch (FatherException ex)  
--可以用super来处理的异常并不代表就应该这样做，应该为每个需要单独处理的异常编写不同的catch块，有多个catch块时要从范围小到范围大。  
