# Exception

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
