// package notebook;

import java.util.ArrayList;

public class NoteBook  {

  private ArrayList<String> notes = new ArrayList<String>();

  public void add(String s) {
    notes.add(s);
  }

  public void insert(int location, String s) {
    notes.add(location, s);
  }

  public int getSize() {
    return notes.size();
  }

  public String getNote(int index) {
    return notes.get(index);
  }

  public void removeNote(int index) {
    notes.remove(index);
  }

  public String[] list() {
    String[] a = new String[getSize()];

    // for (int i = 0; i < getSize(); i++) {
    //   a[i] = getNote(i);
    // }
    notes.toArray(a);
    return a;
  }

  // 新建的每一个 class 中都可以放置一个 main 方法, 便于调试
  public static void main(String[] args) {
    NoteBook note = new NoteBook();

    note.add("123");
    note.add("456");

    // System.out.println(note.getNote(1));

    note.insert(1, "333");
    // System.out.println(note.getNote(1));

    note.removeNote(0);
    // System.out.println(note.getNote(0));

    for (String s: note.list()) {
      System.out.println(s);
    }
    
  }
}