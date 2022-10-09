package io;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;

public class CopyByte {

  public static void main(String argv[]) throws IOException {
    FileInputStream in = null;
    FileOutputStream out = null;

    try {
      // 相对路径是相对于 cwd
      in = new FileInputStream("./bin/io/xanadu.txt");
      out = new FileOutputStream("./bin/io/outagain.txt");
      int c;
      while ((c = in.read()) != -1) {
        out.write(c);
      }
    } catch(IOException e) { 
      e.printStackTrace();
    } finally {
      // avoid serious resource leaks.
      if (in != null) in.close();
      if (out != null) out.close();
    }
  }
}