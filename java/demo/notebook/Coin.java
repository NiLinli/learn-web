import java.util.HashMap;
import java.util.Scanner;

public class Coin { 

  // Integer 为 int 的包裹类型 
  private HashMap<Integer, String> coinnames = new HashMap<Integer, String>();

  public Coin() {
    coinnames.put(1, "penny");
    coinnames.put(10, "dime");
    coinnames.put(25, "quarter");
    coinnames.put(50, "half-dolar");

    System.out.println(coinnames.keySet());
    System.out.println(coinnames);

    // 遍历 HashMap
    for(Integer k: coinnames.keySet()) {
      String s = coinnames.get(k);
      System.out.println(s);
    }
  }

  public String getName(int amount) {
    // 存在
    // 不存在 null
    if(coinnames.containsKey(amount)) {
      return coinnames.get(amount);
    } else {
      return "Not Found";
    }
  }

  public static void main(String[] args) {

    Coin coin = new Coin();

    Scanner in = new Scanner(System.in);
    int amount = in.nextInt();

    System.out.println(coin.getName(amount));
  }
}