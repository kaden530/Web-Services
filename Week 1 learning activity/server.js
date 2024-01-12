const express = require('express');
const routes = express();
 
routes.get('/', require('./index.html'));
 
const port =3000
app.listen(process.env.PORT || 3000, () => {
  console.log('Web Server is listening at port ' + (process.env.PORT || 3000));
});