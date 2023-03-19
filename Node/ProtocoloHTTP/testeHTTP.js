var http = require('http');


http.createServer(function(req,res){
    res.end("Bem vindo ao meu site");
}).listen(9922)

console.log("O servidor estah rodando!")