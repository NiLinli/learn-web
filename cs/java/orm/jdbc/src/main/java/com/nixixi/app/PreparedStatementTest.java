package com.nixixi.app;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.InvalidPropertiesFormatException;
import java.io.Console;
import java.io.FileNotFoundException;
import java.io.IOException;

/**
 * Hello world!
 *
 */
public class PreparedStatementTest {
    public static void main(String[] args) {

        try {
            DbUtil dUtil = new DbUtil();
            Connection con = dUtil.getConnection();
            // 避免自动提交
            con.setAutoCommit(false);

            String query = "update mall_category set order_num = ? where id = ?";
            PreparedStatement stmt = con.prepareStatement(query);
            
            stmt.setInt(1, 100);
            stmt.setInt(2, 3);

            int count = stmt.executeUpdate();
            con.commit();
            System.out.println(count);


        } catch (SQLException | IOException e) {
            e.printStackTrace();
        }

    }
}
