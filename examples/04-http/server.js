import http from 'node:http';

const port = 8000;
const host = '127.0.0.1'; // Es lo mismo que localhost

const server = http.createServer((req, res) => {

    console.log(req.headers);
    console.log(req.url);

    const url = new URL(req.url  ?? '/', `http://${req.headers.host ?? 'localhost'}`);

    // Vamos a crear una url de HEALTH. -> GET /health
    // Va a devolver un json { status: ok }
    if (req.method === 'GET' && url.pathname === '/health') {
        res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8' } );
        res.end(JSON.stringify({ status: 'ok' }));
        return;
    }

    // En cualquier otro caso, va a devolver un texto plano. 'Servidor HTTP funcionando'
    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8' } );
    res.end('Servidor HTTP funcionando');



    // TODO: añade un header que informe de la fecha y hora del servidor
    // const serverDate = new Date();
    // res.writeHead(200, {'Content-Type': 'application/json', 'X-Author': 'KeepCoding', 'X-Server-Date': serverDate } );
    // res.end(JSON.stringify({
    //     data: 'Hello World',
    //     serverDate: serverDate
    // }));

});

server.listen(port, host, () => {
    console.log(`Servidor escuchando en http://${host}:${port}`);
});