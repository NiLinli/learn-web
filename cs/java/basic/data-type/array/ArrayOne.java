import java.util.Scanner;

public class ArrayOne { 

  public static void main(String[] args) {

    Scanner in = new Scanner(System.in);

    int[] numbers =  new int[100];


    int cnt = 0;
    int x;
    x = in.nextInt();

    while(x != -1) {
      numbers[cnt++] = x;
      x = in.nextInt();
    }

    double sum = 0;
    if (cnt > 0) {
      for(int i = 0; i< numbers.length; i++) {
        sum += numbers[i];
      }

      System.out.println( sum/cnt );
    }


  }
}