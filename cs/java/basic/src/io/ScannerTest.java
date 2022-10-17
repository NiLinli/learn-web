package io;

import java.util.Scanner;
import java.io.*;

public class ScannerTest {
  public static void main(String[] argv) throws FileNotFoundException {

    // 将 input stream 根据 token 分割成独立的部分
    Scanner s = null;

    try {
      s = new Scanner(new BufferedReader(new FileReader("./bin/io/xanadu.txt")));
      while (s.hasNext()) {
        System.out.println(s.next());
      }
    } finally {
      if (s != null) {
        s.close();
      }
    }

  }
}
