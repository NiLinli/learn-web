package oop.inheritance_;

public class MountainBike extends Bicycle {

  public int seatHeight;

  public MountainBike(int startHeight,
      int startCadence,
      int startSpeed,
      int startGear) {
    // Constructors are not members, so they are not inherited by subclasses,
    // but the constructor of the superclass can be invoked from the subclass.
    // Constructor Chaining
    super(startCadence, startSpeed, startGear);
    seatHeight = startHeight;
  }

  public void setHeight(int newValue) {
    seatHeight = newValue;
  }

  public static void main(String[] argv) {
    // Casting: shows the use of an object of one type in place of another type
    
    // implicit casting: (Object)(new MountainBike()) 
    // subclass take in place of superclass
    Object o = new MountainBike(0, 0, 0, 0);

    // explicit casting
    // superclass take in place of subclass
    MountainBike mBike;
    if (o instanceof MountainBike) {
      mBike = (MountainBike) o;
      mBike.setHeight(123);
    }
  }
}
