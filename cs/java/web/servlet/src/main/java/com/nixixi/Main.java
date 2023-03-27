package com.nixixi;

import org.apache.catalina.Context;
import org.apache.catalina.Globals;
import org.apache.catalina.startup.Tomcat;


public class Main {

  public static void main(String[] args) throws Exception {
    String contextPath = "/";
    String appBase = Thread.currentThread().getContextClassLoader().getResource("").getPath();
    
    Tomcat tomcat = new Tomcat();
    tomcat.setBaseDir(appBase);
    tomcat.setPort(8080);
    tomcat.enableNaming();
    Context context = tomcat.addWebapp(contextPath, appBase);
    context.getServletContext().setAttribute(Globals.ALT_DD_ATTR, appBase + "/web.xml");

    tomcat.start();
    tomcat.getServer().await();
  }
}
