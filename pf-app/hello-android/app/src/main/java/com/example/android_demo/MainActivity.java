// 程序的入口
// 系统会启动此 Activity 的实例并加载其布局

package com.example.android_demo;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        // 访问 layout/activity_main
        setContentView(R.layout.activity_main);
    }
}
