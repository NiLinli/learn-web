package swing.kcb;
import javax.swing.event.TableModelListener;
import javax.swing.table.TableModel;

public class KCBData implements TableModel {

  private String[] titles = {
    "周一",
    "周二",
    "周三",
    "周四",
    "周五",
    "周六",
    "周日",
  };

  private String[][] data = new String[8][7];

  public KCBData() {
    for (int i = 0; i< data.length; i++) {
      for (int j = 0; j< data[i].length; j++) {
        data[i][j] = "";
      }
    }
  }

  @Override
  public void addTableModelListener(TableModelListener arg0) {

  }

  @Override
  // 每一列表格中的数据类型
  public Class<?> getColumnClass(int arg0) {
    return String.class;
  }

  @Override
  // 列数
  public int getColumnCount() {
    return 7;
  }

  @Override
  // 每一列标题
  public String getColumnName(int arg0) {
    return titles[arg0];
  }

  @Override
  // 行数
  public int getRowCount() {
    return 8;
  }

  @Override
  public Object getValueAt(int arg0, int arg1) {
    return data[arg0][arg1];
  }

  @Override
  // 单元格是否能够被编辑
  public boolean isCellEditable(int arg0, int arg1) {
    return true;
  }

  @Override 
  public void removeTableModelListener(TableModelListener arg0) {

  }

  @Override
  public void setValueAt(Object arg0, int arg1, int arg2) {
    data[arg1][arg2] = (String)arg0;
  }

}