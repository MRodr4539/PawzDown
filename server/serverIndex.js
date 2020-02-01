const express = require("express");
const bodyParser = require("body-parser");
const locationsRouter = require('./routes/locations');

const app = express();
const port = process.env.PORT || 4001;

app.use(bodyParser.json())
app.use('/locationList', locationsRouter)

app.get('/', (req, res) => {
  res.send('Welcome to our server!')
})

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
