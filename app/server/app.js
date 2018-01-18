import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';


const app = express();



// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());


const publicPath = express.static(path.join(__dirname, '../'));
const indexPath = path.join(__dirname, '../index.html');

app.use(publicPath);

app.get('/', (req, res) => {
    res.sendFile(indexPath);
})

app.get('/fb-hook', (req, res) => {
    console.log('get',req.body);
    res.status(200).send();
});

app.post('/fb-hook', (req, res) => {
    console.log('post',req.body);
    res.status(200).send();
});

export default app;
