import express from 'express';

const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/health', (req, res) => {
    res.send({
        status: 'ok!'
    });
});


export default app;