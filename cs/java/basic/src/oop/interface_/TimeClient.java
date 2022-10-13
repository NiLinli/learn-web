package oop.interface_;
import java.time.*;

public interface TimeClient {
  
  // public static final
  double E = 2.718282;

  // public abstract
  void setTime(int hour, int minute, int second);
  void setDate(int day, int month, int year);
  void setDateAndTime(int day, int month, int year, int hour, int minute, int second);
  LocalDateTime getLocalDateTime();

  // static method
  static ZoneId getZoneId(String zoneString) {
    try {
      return ZoneId.of(zoneString);
    } catch (DateTimeException e) {
      System.err.println("Invalid time zone: " + zoneString +
          "; using default time zone instead.");
      return ZoneId.systemDefault();
    }
  }

  static public Object doNothing(Object object1) {
    // Interface 可以作为 type
    TimeClient obj = (TimeClient)object1;
    return obj;
  }

  // default method 具体实现, 可以访问 this
  // class 中的方法不能与这个相同
  default ZonedDateTime getZonedDateTime(String zoneString) {
    return ZonedDateTime.of(getLocalDateTime(), getZoneId(zoneString));
  }

}
