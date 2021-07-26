const http = require('http');
const { serialize } = require('v8');

const srv = http.createServer((req, res) => {
    console.log('MÉTODO: ', req.method);
    console.log('HEADERS: ', req.headers);
    console.log('HTTP VERSÃO: ', req.httpVersion);

    if (req.method==="POST") {
        res.writeHead(201, {
            'Content-type': 'application/json'
        })

        res.write('{"message":"Cadastro ok"}')
    }

    if (req === "GET"){
        res.writeHead(200, {
            'Content-Type':'text/html'
        })
    }


});

srv.listen(3001, () => {
    console.log('Funcionando!');
});

dddd