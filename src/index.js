const app = require('express')();
const bodyParser = require('body-parser');

app.use(bodyParser.json())

const PORT = process.env.PORT || 4000;

app.listen(4000, () => {
    console.log('Server started on http://localhost:4000/');
});