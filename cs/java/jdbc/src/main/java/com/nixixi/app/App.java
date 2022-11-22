package com.nixixi.app;

import java.sql.Connection;
import java.io.Console;

/**
 * Hello world!
 *
 */
public class App {
    public static void main(String[] args) {
        Console c = System.console();

        if (c == null) {
            System.err.println("No console.");
            System.exit(1);
        }

        try {
            DbUtil dUtil = new DbUtil("properties/mysql-sample-properties.xml");
            Connection con = dUtil.getConnection();
            dUtil.viewPostTable(con);
        } catch (Exception e) {
            e.printStackTrace();
            return;
        }

    }
}
