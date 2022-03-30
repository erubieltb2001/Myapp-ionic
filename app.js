const express    = require('express');
const path       = require('path');
const bodyParser = require('body-parser');
const app        = express();

const bcrypt      = require('bcrypt')
const mongoose    = require('mongoose')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use(express.static(path.join(_dirname, 'public')));

const mongo_uri = 'mongodb://127.0.0.1:27017/';

mongoose.connect(mongo_uri, function(err) {
    if (err) {
      throw err;
    }else {
      console.log('Sucessfully connected to ${mongo_uri}');
    }
});

app.get('/', (req, res) => {

});

app.listen(3000, ()=> {
    console.Log('server started')
})
module.exports = app;
