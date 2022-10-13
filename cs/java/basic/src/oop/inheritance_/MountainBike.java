package oop.inheritance_;

public class MountainBike extends Bicycle {

  public int seatHeight;
  public String suspension;

  public MountainBike(
      int startHeight,
      int startCadence,
      int startSpeed,
      int startGear,
      String suspensionType) {
    // Constructors are not members, so they are not inherited by subclasses,
    // but the constructor of the superclass can be invoked from the subclass.
    // Constructor Chaining
    super(startCadence, startSpeed, startGear);
    seatHeight = startHeight;
    suspension = suspensionType;
  }

  // 与父类没啥关系
  public static void testClassMethod() {
    System.out.println("The static method in MountainBike");
  }

  // 覆盖父类
  public void testInstanceMethod() {
    System.out.println("The instance method in MountainBike");
  }

  public void setHeight(int newValue) {
    seatHeight = newValue;
  }

  public String getSuspension() {
    return this.suspension;
  }

  public void setSuspension(String suspensionType) {
    this.suspension = suspensionType;
  }

  public void printDescription() {
    // 调用被覆盖的 superclass method
    super.printDescription();
    System.out.println("The " + "MountainBike has a" +
        getSuspension() + " suspension.");
  }

  // Cannot override the final method from Bicycle
  // void testFinalMethod() {
  // }


}
