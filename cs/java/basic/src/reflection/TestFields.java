package reflection;

import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.List;

public class TestFields {
  public static void main(String[] args) throws Exception {
    Person person = new Person();

    Class<?> clazz = person.getClass();

    // all fields
    Field[] fields = clazz.getDeclaredFields();
    List<String> actualFieldNames = getFieldNames(fields);
    System.out.println(actualFieldNames.toString());

    // public
    // field object
    Field nameField = clazz.getField("name");
    Class<?> nameFieldClass = nameField.getType();
    System.out.println(nameFieldClass.getName());

    // private
    Field ageField = clazz.getDeclaredField("age");
    System.out.println(ageField.getName());

    // static field 没有对象传入, 传入 null

    Field maxAgeField = clazz.getField("MAX_AGE");
    maxAgeField.setAccessible(true);
    System.out.println(maxAgeField.get(null));
    

    // get set value field
    ageField.setAccessible(true);
    System.out.println(ageField.get(person));
    ageField.set(person, 100);
    System.out.println(ageField.get(person));
  }

  private static List<String> getFieldNames(Field[] fields) {
    List<String> fieldNames = new ArrayList<>();
    for (Field field : fields)
      fieldNames.add(field.getName());
    return fieldNames;
  }
}
