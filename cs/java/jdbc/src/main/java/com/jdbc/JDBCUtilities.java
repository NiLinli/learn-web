package com.jdbc;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.Properties;

public class JDBCUtilities {

  public Connection getConnection(String userName,
      String password, String url) throws SQLException {
    Connection conn = null;
    Properties connectionProps = new Properties();
    connectionProps.put("user", userName);
    connectionProps.put("password", password);

    conn = DriverManager.getConnection("jdbc:mysql://" + url + '/', connectionProps);
    // conn.setCatalog(this.dbName);

    return conn;
  }
}
