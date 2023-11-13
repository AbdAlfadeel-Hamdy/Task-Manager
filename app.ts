import express from 'express';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static('./public'));

app.listen(5000, () => console.log('Server started listening../.'));
