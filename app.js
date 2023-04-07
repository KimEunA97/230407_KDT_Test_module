import http from 'http'


const server = http.createServer(function (req, res) {




  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end();


})

server.listen(3050, function (error) {


  if(error) {

    console.log("서버 에러");

  }

  else{

    console.log("서버 구동 중...");

  }


})

