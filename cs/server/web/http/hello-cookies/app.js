var express = require('express');
var path = require('path');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser());
app.use(express.static(path.resolve(__dirname, './public'), {}));


const users = {
  1: {
    name: '倪西西',
    age: 18
  }
};

app.get('/login', (req, res) => {
  // 增量贴 Cookies
  res.setHeader('Set-Cookie', ['type=ninja', 'language=javascript', 'login=1', 'userId=1']);
  res.send('登录成功');
});

app.get('/set_same_site', (req, res) => {
  // 设置属性需要跟随在 key=value 之后
  res.setHeader('Set-Cookie', ['login=0; SameSite=Strict']);
  res.send('设置 login 字段 SameSite');
});

app.get('/remove_same_site', (req, res) => {
  res.setHeader('Set-Cookie', ['login=0']);
  res.send('清楚 login 字段 SameSite');
});

app.get('/logout', (req, res) => {
  // 无法清楚 Cookie
  // 置空 + 过期
  res.setHeader('Set-Cookie', ['login=', 'userId=']);
  res.send('退出登录');
});

app.get('/user', (req, res) => {
  const userId = req.cookies.userId; 
  if (userId) {
    return res.send(users[userId]);
  } else {
    res.send('未登录');
  }
});


// 模拟业务请求
app.all('/transfer_money', (req, res) => {
  const userId = req.cookies.userId; 
  if (userId) {

    console.log('omg 你的钱被转走了');
    res.send({
      data: '转账成功'
    });
  } else {
    res.status(401).json({
      message: '未登录'
    })
  }
});

module.exports = app;
