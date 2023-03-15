package com.nixixi.app;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.InvalidPropertiesFormatException;
import java.io.Console;
import java.io.FileNotFoundException;
import java.io.IOException;

/**
 * Hello world!
 *
 */
public class App {
    public static void main(String[] args) {

        try {
            DbUtil dUtil = new DbUtil();
            Connection con = dUtil.getConnection();
            System.out.println(con);
        } catch (SQLException | IOException e) {
            e.printStackTrace();
        }

    }
}
