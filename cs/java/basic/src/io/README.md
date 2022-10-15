# IO

## I/O streams

- An I/O Stream represents an input source or an output destination.
- A program uses an input stream to read data from a source
- A program uses an output stream to write data to a destination,
- generates, or consumes data.
- A stream is a sequence of data.
- but a source or destination can also be another program, a peripheral device, a network socket, or an array.

## Buffered Streams

This means each read or write request is handled directly by the underlying OS. 

资源浪费

- often triggers disk access
- network activity
- some other operation 

memory area known as a buffer

Buffered input streams read data from buffer 
the native input API is called only when the buffer is empty.  

buffered output streams write data to a buffer  
and the native output API is called only when the buffer is full.

- EOF
- LF/CRLF


## serialization

1.保存对象：将被序列化的对象写入到文件中，然后就可以让你的程序去文件中读取序列化的对象并把他们展开的活生生的状态。  
序列化的文件是很难让一般人阅读的，比纯文件更容易让对象恢复，比较安全。   
注：当对象进行序列化的时候，被该对象所引用的实例变量也会被序列化，所有被引用的对象也会被序列化，自动进行。    
让类能序列化，必须实现Serializable。
某些实例变量不能或不应该被序列化，标记为transient。  

2.将序列化对象写入文件的步骤：  
```
try
{
	ObjectOutputStream os=new ObjectOutputStream(new FileOutputStream("Apple.ser"));   //创建FileOutputStream放入ObjectOutputStream中
	os.writeObject(a1);  //写入对象
	os.close();			//关闭ObjectOutputStream
	}
	catch (Exception ex)
	{
	}
```

Stream：串流，连接起来代表来源与目的地，串流必须连接到某处才能叫串流。  
一般来说，串流都要两两连接叠加使用才可以。其中一个表示连接，另外一个调用方法去叠加串流。  
这样可以通过不同的串流组合达到最大的适应性。  

3.解序列化  
```
try
{
	ObjectInputStream is=new ObjectInputStream(new FileInputStream("Apple.ser"));//创建FileInputStream连接到ObjectInputStream
	Apple a1=(Apple)is.readObject();  //读取对象Obejct，并转换成所需类型
	is.close();       //关闭
}
catch (Exception ex)
{
}
```
--解序列化过程：  
对象从Stream中读出来；  //FileInputStream  
Java虚拟机通过存储判断class类型；  //ObjectInputStream  
Java虚拟机尝试寻找和加载对象的类。如果找不到，抛出异常。  
新的对象会被配置在堆上面，但构造函数不会执行（如果执行了就成了新的对象了）；  
从第一个不可序列化的弗雷开始，全部都会重新初始状态；  
对象的实例变量会被还原成序列化时点的状态值。transient变量会被赋值null...；  

## File

1.java.io.File  
--创建出代表现存盘文件的File对象； `File f=new File("Mycode.txt");`  
--建立心得目录；`File dir=new File("Chapter");     dir.mkdir();`  
--列出目录下内容；  
--取得文件或目录的绝对路径；  
--删除文件或者目录。  

2.字符串写入文本文件：便于在Java与非Java中传递

```
FileWriter writer=new FileWriter("Foo.txt");
writer.writer("hello foo!");
writer.close;
```

读取文本文件：

```
FileReader fr=new FileReader(new File("foo.txt"));
BufferedReader reader=new BufferedReader(fr);

String line=null;
line=reader.readLine();
reader.close();
```
