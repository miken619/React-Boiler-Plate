const express = require('express');
const parser = require('body-parser');
const path = require('path');

const app = express();
app.use(parser.urlencoded({ extended: true }))
   .use(parser.json())
   .use(express.static(path.join(__dirname, '../static')));

const PORT = process.env.PORT || 3000;

app.listen(PORT, err => {
  if (err) {
    console.log('Server failed to start at port ' + PORT);
  } else {
    console.log('Server successfully started at port ' + PORT);
  }

});