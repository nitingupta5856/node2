const http = require("http"); // not global module bcz we  import http

const server=http.createServer((req,res)=>{
    // console.log(req);
    res.end('nitin');
    // console.log('nitin')
})
server.listen(4000);