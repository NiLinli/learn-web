package io;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

public class CopyChar {

  public void copyChar(String inPath, String outPath) throws IOException {
    FileReader in = null;
    FileWriter out = null;

    try {
      // java8: 文件编码: 以系统默认的编码读取的
      in = new FileReader(inPath);
      out = new FileWriter(outPath);

      int c;
      while ((c = in.read()) != -1) {
        // c 每次读取一个字符编码 
        // 并以 UTF-16 的方式放入内存 buffer 中
        out.write(c);
      }
    } catch (IOException e) {
      e.printStackTrace();
    } finally {
      // avoid serious resource leaks.
      if (in != null)
        in.close();
      if (out != null)
        out.close();
    }
  }

  public static void main(String argv[]) throws IOException {

    CopyChar test = new CopyChar();

    test.copyChar("./bin/io/xanadu.txt", "./bin/io/characteroutput.txt");

    // utf-8 的方式去读 utf-16 的文件, 造成乱码
    test.copyChar("./bin/io/xanadu-utf16.txt", "./bin/io/characteroutput-utf16.txt");
    

  }
}