const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'content-type');
    next();
  });

  //app.use('/boards', require('./authmiddleware'));//전체 JWT검증 사용
  app.use('/boards', require('./boardapi'));
  app.use('/members', require('./memberapi'));
  app.listen(9000, () => {
	console.log('Listening...');
});