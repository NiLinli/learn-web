package io;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

public class CopyChar {

  public static void main(String argv[]) throws IOException {
    FileReader in = null;
    FileWriter out = null;

    try {
      // java8
      // 文件编码: 以系统默认的编码读取的
      // buffer: UTF-16
      // 读取：文件 => buffer 
      // 写入: buffer => 文件 
      
      in = new FileReader("./bin/io/xanadu.txt");
      out = new FileWriter("./bin/io/characteroutput.txt");
      int c;
      
      // read write 都是 buffer 中操作
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