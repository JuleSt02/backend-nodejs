import app from '../app.js';

// En www.js inicializamos el servidor web

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '127.0.0.1';


app.listen(PORT, HOST, () => {
    console.log(`Express.js app listening on http://${HOST}:${PORT}`);
});