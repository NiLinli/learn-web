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

        // 阻塞测试 attach 调试
        String login = c.readLine("Debugger pause: ");
        
        System.out.println("Hello World!");

        try {
            DbUtil dUtil = new DbUtil("properties/mysql-sample-properties.xml");
            Connection con = dUtil.getConnection();
        } catch (Exception e) {
            e.printStackTrace();
            return;
        }

    }
}
