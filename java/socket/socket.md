# Socket

1.Socket:Socket是个代表两台机器之间网络连接的对象(java.net.Socket)。其建立代表两台机器之间存在对方的信息，包括网络地址和TCP的端口号。    
    `Socket chatSocket=new Socket("IP",TCP);`  
TCP:16位宽，用来识别服务器上特定程序的数字，0-1023端口保留给已知的特定服务器使用。  
--读取数据  
<pre>
InputStreamReader stream =new InputStreamReader(chatSocket.getInputStream());  //建立连接到Socket上低层输入串流的InputStreamReader  
BufferedReader reader=new BufferedReader(stream);  //将BufferedReader连接到InputStreamReader
String message=reader.readLine();  //
</pre>   
--写入数据  
<pre>
PrintWriter writer=new PrintWriter(chatSocket.getOutputStream());  //建立到Socket的PrintWriter
writer.print("ssss");
</pre> 

2.编写服务器应用程序需要一对Socket。  
ServerSocket:等待用户请求；  
Socket:用户通信。  

<pre>
ServerSocket serverSocket=new ServerSocket(TCP1);  //服务器为特定的应用程序创建出ServerSocket
Socket sock2=new serverSocket.accept();  //服务器创建出与客户端通信的新的Socket
</pre>
