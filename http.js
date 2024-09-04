const http = require('http')

const server = http.createServer((req, res)=>{
    if(req.url === '/about'){
        res.end(`<h1>WHOOPS</h1><a href="/">go back</a>`)
    }else {
        res.end(`HELLO WORLD`)
    }
})

server.listen(5000);