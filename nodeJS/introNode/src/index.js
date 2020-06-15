const express = require('express')
const bodyParser = require('body-parser')
const userRoute = require('./routes');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

userRoute(app);

app.get('/', (req, res) => {
  return res.send('Hello World')
})

app.listen(3333, () => {
  console.log('Now listening on port 3333')
});