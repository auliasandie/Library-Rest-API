require ('dotenv').config ();
const express = require ('express');
const logger = require ('morgan');
const bodyParser = require ('body-parser');
const router = require ('./src/Routes/index'); //jangan lupa ini
const app = express();
// parse application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}))



app.use('/api', router)


//Server listening
app.listen(8000, () => {
  console.log('Server started on port 8000...');
});



module.exports = app;