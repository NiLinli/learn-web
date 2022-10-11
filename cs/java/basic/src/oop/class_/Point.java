package oop.class_;

// members: fields + methods + nested classes
public class Point {
  public int x = 0;
  public int y = 0;

  // 构造函数不是 class 中的 members
  // 构造函数不是方法, 没有显示的返回类型
  public Point(int a, int b, int c) {
    // this 可以省略不写
    x = a;
    y = b;
  }

  public Point(int x, int y) {
    // 由于 argument 和 field 相同, 必须要加上 this
    this.x = x;
    this.y = y;
  }

  public static void main(String[] argv) {
    Point p1 = new Point(0, 0, 0);
    Point p2 = new Point(0, 0);

    System.out.println(p1.x);
    System.out.println(p2.x);
  }
}
