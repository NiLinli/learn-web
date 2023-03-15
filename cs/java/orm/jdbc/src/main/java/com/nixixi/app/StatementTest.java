package com.nixixi.app;

import java.sql.Connection;
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
public class StatementTest {
    public static void main(String[] args) {

        try {
            DbUtil dUtil = new DbUtil();
            Connection con = dUtil.getConnection();

            // select
            // String query = "select mc.id as id, mc.name as name, mp.name as pname, mp.price as pprice from mall_category mc left join mall_product mp on mc.id = mp.category_id";
            // Statement stmt = con.createStatement();
            // ResultSet rs = stmt.executeQuery(query);
            // while (rs.next()) {
            //     System.out.println(rs.getInt("id") + ' ' + rs.getString("name") + ' ' + rs.getString("pname"));
            // }

            // update
            String query = "update mall_category set order_num = 10 where id = 3";
            Statement stmt = con.createStatement();
            // 返回 修改的 row 的数量
            int count = stmt.executeUpdate(query);
            System.out.println(count);

            // delete create 

        } catch (SQLException | IOException e) {
            e.printStackTrace();
        }

    }
}
