require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const errorHandler = require('./middleware/error-handle');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use('/users', require('./users/users.controller'));

app.use(errorHandler);

// 启动服务器
const port = process.env.NODE_ENV === 'production' ? 80 : 4001;
app.listen(port, () => {
  console.log('Server listening on port ' + port);
})