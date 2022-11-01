package com.nixixi.app;

import java.io.*;
import java.net.URL;
import java.util.InvalidPropertiesFormatException;
import java.util.Properties;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import com.mysql.cj.jdbc.Driver;

public class DbUtil {

  private Properties prop;
  public String dbName;
  public String userName;
  public String password;
  public String urlString;
  private String serverName;
  private int portNumber;

  public DbUtil(String propertiesFileName) throws FileNotFoundException,
      IOException,
      InvalidPropertiesFormatException {
    super();
    this.setProperties(propertiesFileName);

  }

  private void setProperties(String fileName) throws FileNotFoundException,
      IOException,
      InvalidPropertiesFormatException {
    this.prop = new Properties();

    InputStream fis = getClass().getClassLoader().getResourceAsStream(fileName);
    prop.loadFromXML(fis);

    this.dbName = this.prop.getProperty("database_name");
    this.userName = this.prop.getProperty("user_name");
    this.password = this.prop.getProperty("password");
    this.serverName = this.prop.getProperty("server_name");
    this.portNumber = Integer.parseInt(this.prop.getProperty("port_number"));

    System.out.println("Set the following properties:");
    System.out.println("dbName: " + dbName);
    System.out.println("userName: " + userName);
    System.out.println("serverName: " + serverName);
    System.out.println("portNumber: " + portNumber);

  }

  public Connection getConnection() throws SQLException {

    Connection conn = null;
    Properties connectionProps = new Properties();
    connectionProps.put("user", this.userName);
    connectionProps.put("password", this.password);

    conn = DriverManager.getConnection(
        "jdbc:mysql://" +
            this.serverName +
            ":" + this.portNumber + "/" + this.dbName,
        connectionProps);
    System.out.println("Connected to database");
    return conn;
  }
}
