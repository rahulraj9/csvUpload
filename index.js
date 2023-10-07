const express = require('express')
const bodyParser = require('body-parser')
const port = 9000;

const app = express();
const routes = require('./route/index.route')
app.use(bodyParser.json())
app.use('/',routes)

app.get('/', (req, res) => {
    res.render('home');
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    require('./config/db.config')
  });
