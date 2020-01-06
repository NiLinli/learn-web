# Collection 容器

数组可以看作是一种 Collection, 但是数组没有办法进行自动增长
所以扩展出其他类型的 Collection

- List: 顺序排列, 元素值不唯一
  - ArrayList
  - LinkedList
- Set: 集合就是数学中的集合的概念, 所有的元素都具有 **唯一** 的值, 元素在其中没有顺序
  - HashSet 防止重复的集合，可快速寻找相符的元素
  - TreeSet 以有序状态保持并可防止重复
- Map: K-V
  - HashMap HashTable
  - LinkedHashMap 类似与HashMap，但可记住元素的插入顺序，也可以设定成依照元素上存取的先后顺序

## generic

1.意义：运用泛型就可以创建类型安全更好的集合，让问题尽可能在编译期间就被抓到。如果不使用泛型，编译可以通过，但是运行起来可能会有错误。  

2.创建泛型化类（例如ArrayList）  
    `new ArrayList<Song>`  
声明与指定泛型的类型与变量  
    `List<Song> songList=new ArrayList<Song>`  
声明与调用取用泛型类型的方法  
    `void foo（List<Song> list）    
      x.foo(songList);`  

3.泛型的类代表类的声明用到类型参数；  
泛型的方法代表方法的声明特征用到类型参数。  
--使用定义在类声明的类型参数   

    public class ArrayList<E> extends AbstractList<E>  {
    	public boolean add(E o){}
    }

--使用泛型的方法  

    public <T extends Animals> void takeThing(ArrayList<T> list){}

对于泛型来说，extends这个关键词代表是一个，适用于类(extends
)和接口(implements)。
  
4.使用多态参数与泛型  
结论：如果把方法声明为`ArrayList<Animal>`,它就只会取用`ArrayList<Animal>`参数，`ArrayList<Dog>`和`ArrayList<Cat>`都不行。  

反例：

    public void takeAnimals(ArrayList<Animal> animals){
    	animals.add(new Cat());
    
    }

x.takeAnimals(new ArrayList<Dog>);
//ArrayList<Animal> animals=new ArrayList<Dog>;
animals.add(new Cat());  这一行编译不过关
</pre>
数组的类型是在运行器件检查的，集合的检查只会发生在编译期间。  

5.万用字符 ?  
让takeAnimals()中animals.add(new Cat());这类语句编译不过关，就可以运用多态。  
```
public <T extends Animal> void takeThing(ArrayList<T> list)  
```  
```
public void takeThing(ArrayList<? extends Animals> list)
```  
在方法参数中使用万用字符，编译器会阻止任何可能破坏引用参数所指集合的行为。  
你能够调用list中任何元素的方法，但不能加入元素。  
animals.add(new Cat());就不能通过编译。  


