package oop.inheritance_;

public class BicycleTest {

  // 程序是操作实现共同方法的子类的时候
  // 通过多态，引进新子类时也不必修改程序
  public void printBicycleDescription(Bicycle bike) {
    // JVM calls the appropriate method for the object that is referred to in each variable.
    // It does not call the method that is defined by the variable's type.
    bike.printDescription();
  } 

  
  public static void main(String[] argv) {

    BicycleTest tester = new BicycleTest();

    // Casting: shows the use of an object of one type in place of another type

    // implicit casting: (Object)(new MountainBike())
    // subclass take in place of superclass
    Object o = new MountainBike(0, 0, 0, 0, "Dual");

    // explicit casting
    // superclass take in place of subclass
    MountainBike mBike;
    if (o instanceof MountainBike) {
      // 向下转型
      mBike = (MountainBike) o; 
      mBike.setHeight(123);

      MountainBike.testClassMethod();
      Bicycle.testClassMethod();
      mBike.testInstanceMethod();
    }

    Bicycle bike01, bike02;

    bike01 = new Bicycle(20, 10, 1);
    bike02 = new MountainBike(20, 10, 5, 0, "Dual");

    tester.printBicycleDescription(bike01);
    tester.printBicycleDescription(bike02);
  
  }
}
