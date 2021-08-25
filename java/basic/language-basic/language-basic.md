# java basic

## 变量

variables must have a **type** and a **name**.  

## primitive data type

- byte 1 --> short 2 --> int 4 --> long 8  
- boolean ture false
- char 2
- float 4 --> double 8

存在包装类型

小的值可以放进大的里面
存在包装类型 Boolean Character Integer Double

## reference variable

引用变量  

- 对象引用变量保存的是存取对象的操作方法
- 不是对象的容器, 类似于指向对象的指针或者地址
- 引用变量的具体字节就算知道，也无法使用这些字节来实现存取对象以外的操作

## Array

- 数组是个对象
- 大小是确定的
- 元素类型相同
- **元素个数可以为变量** 运行时动态创建大小

property or method

- length
- toString
- ...

## String

String 是一个 class, 不是基本类型

输入字符串

- in.next();			读入一个单词(空格 tab 和 换行 界定结束)
- in.nextLine();	读入一行

String 不能直接改变, 都是返回新的字符串

## Object

### 成员变量(属性)

- 应该尽量私有 private

private:

- 针对 class 而不是 object
- 代码层面而不是运行层面 代码层面 class 的内部都可以访问
- 同一个类所有的对象都互相访问私有成员变量

public: 同一个 pa

状态，由实例变量组成。  
行为，由方法（函数）组成。  
注：任意一个对象都带有相同的方法，但方法可以根据实例变量的值来表现出不同的行为。  
行为存在与类中，状态存在与对象中。  

### 方法（函数)

1.实参argument是传给方法的值，传入方法后就成了型参parameter。  
方法会运用形参，调用的一方会传入实参。  
--可以传入一个以上的参数。  
--可将变量当作参数传入，类型相符就行。
--方法无法改变调用方所传入的参数，只是个值的拷贝。

2.运用参数和返回类型：  
Getter执行get返回实例变量的值，Setter执行set传入一个参数来设定实例变量的值。  
--封装实例变量：将实例变量标记为private，将getters与setters标记为public。  

```java
public void setXXX(int hehe) {
	this.hehe=hehe;
}

public int getXXX() {
	return hehe;
}
```

3.实例变量声明在类内而不是方法中；  
局部变量声明在方法中，必须初始化。

# 对象的构造器与垃圾收集器  #
## 构造 ##
1.栈stack：方法调用及变量生存空间。  
--局部变量和方法的参数都是生命在方法中，是暂时的，生命周期仅限于放在栈上的期间；   
--调用一个方法时，方法会放在调用栈的栈顶，栈顶上的方法是目前执行的方法，新的方法往上面堆，死的时候也先死。   
栈heap：对象的生存空间堆。  
--实例变量在所属的对象中；

2.创建对象的过程：  
--声明引用变量；`Duck myDuck`  
--创建对象；  `new Duck();`  
--连接对象与引用；`myDuck=new Duck()`

3.new Duck():创建的时候调用构造函数，不是方法（没有返回类型）。  
--有两个及以上的构成重载；  
--一定要有不需要参数的构造方法。  
--编译器不会帮你写出没有参数的构造函数，所以如果你已经写了一个有参数的构造函数，一定要手动写一个没有参数的。    

4.父类的构造函数：在创建新的对象时，所有继承下来的构造函数都会被执行，构造函数链Constructor Chaining。  
new的对象的构造函数在栈底，一层层调用父类的构造函数往上面堆，然后从栈顶执行，所以先执行父类的构造函数。  
--调用父类的构造函数  
<pre>
...
public Animal(){
...
}
...

...
public Dog(){
super();
...
}
...
</pre> 
构造函数中调用super()：把父类的构造函数放在堆栈的最上方。父类的构造函数接着调用其构造函数直到Object为止。然后再一路执行，弹出回到原来的构造函数。super()只能放在第一行。  
编译器自动加上了super()调用。  
--如果你没有写构造函数。  
<pre>
public ClassName(){
	super();
}
</pre>
--如果写了构造函数，对无参数的重载版本调用。  

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
