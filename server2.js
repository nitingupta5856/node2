const http = require("http"); // not global module bcz we  import http

const server=http.createServer((req,res)=>{
    // console.log(req);
    // console.log(req.url,req.headers,req.method);
   
    // process.exit();
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    // res.write('<body><h1>hello from my node.js server</h1></body>');
    res.write('<body>')
    if(req.url=="/" || req.url=="/node"){
        res.write('<h1>hello from my node.js server</h1>')
    }
    else if(req.url=="/home"){
        res.write('<h1>Welcome home</h1>')
    }
    else if(req.url=="/about,"){
        res.write('<h1> Welcome to About Us page</h1>')
    }
   
    res.write('</body>');
    res.write('</head>');
    res.end()

})
server.listen(3000);