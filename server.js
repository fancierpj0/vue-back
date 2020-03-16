const http = require('http');
const users = [
    {id:1, name:'ahhh'}
    ,{id:2, name:'ahhh2'}
    ,{id:3, name:'ahhh3'}
];

const server = http.createServer(function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
    if(req.url === '/api/users'){
      res.end(JSON.stringify(users))
    }else{
      res.end('Not Found');
    }
});

server.listen(3000, () => {
    console.log('server is running at 3000');
});
