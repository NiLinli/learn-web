package io;

public class PrintTest {
  public static void main(String[] args) {
    int i = 2;
    double r = Math.sqrt(i);

    // static text embedded with format specifiers
    // format specifiers begin with a % and end with a 1- or 2-character conversion 
    System.out.format("The square root of %d is %f.%n", i, r);
  }
}
