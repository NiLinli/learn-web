package reflection;

public class Goat extends Animal implements Locomotion {

  public Goat(String string) {
    super(string);
  }

  @Override
  protected String getSound() {
    return "bleat";
  }

  @Override
  public String getLocomotion() {
    return "walks";
  }

  @Override
  public String eats() {
    return "grass";
  }  
}
