package com.nixixi.app;

import java.io.*;
import java.util.InvalidPropertiesFormatException;
import java.util.Properties;
import java.sql.Connection;
import java.sql.DriverManager;

import java.sql.SQLException;

public class DbUtil {

  private Properties prop;

  public DbUtil() {
  }

  public Connection getConnection() throws SQLException, InvalidPropertiesFormatException, IOException {

    Connection conn = null;
    Properties connectionProps = new Properties();

    Properties properties = new Properties();
    InputStream fis = getClass().getClassLoader().getResourceAsStream("properties/mysql-sample-properties.xml");
    properties.loadFromXML(fis);

    String dbName = properties.getProperty("database_name");
    String userName = properties.getProperty("user_name");
    String password = properties.getProperty("password");
    String serverName = properties.getProperty("server_name");
    int portNumber = Integer.parseInt(properties.getProperty("port_number"));

    connectionProps.put("user", userName);
    connectionProps.put("password", password);

    conn = DriverManager.getConnection(
        "jdbc:mysql://" +
            serverName +
            ":" +
            portNumber +
            "/" +
            dbName,
        connectionProps);
    System.out.println("Connected to database");
    return conn;
  }

}
