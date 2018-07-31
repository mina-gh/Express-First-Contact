const express = require('express');

const app = express();

const PORT = '1337';

// Middleware is a function atha handles responding to requests of the form : (req, res, next) => {...};
app.use('*', (req, res, next) => {
  // Note that '*' is a wildcard so that having this route will make all the requests hit here first.
  // send the current request to the next matching route.
  next();
});

// 4 routes - /, /puppies, /kittens, and /data
app.get('/', (req, res) => {
  res.send('<h1>Puppies and Kittens Galore</h1>');
});

app.get('/puppies', (req, res) => {
  res.send(
    '<h1>Puppies</h1>' +
    '<p><img src="https://images.pexels.com/photos/257540/pexels-photo-257540.jpeg?auto=compress&cs=tinysrgb&h=350" /></p>'
  );
});

app.get('/puppies/:pId', (req, res, next) => {
  let {pId} = req.params;

  res.send(
    '<h1>Puppies</h1>' +
    '<p>Given id - ' + pId + '. Go retrieve a puppy with the id from db!</p>'
  );
});

app.get('/kittens', (req, res) => {
  res.send(
    '<h1>Kittens</h1>' +
    '<p><img src="https://pbs.twimg.com/profile_images/562466745340817408/_nIu8KHX.jpeg" width="30%" height="50%"/></p>'
  );
});

app.post('/data', (req, res) => {
  res.send('<p>Not implemented yet.</p>');
});

app.delete('/data', (req, res) => {
  res.send('<p>Not implemented yet.</p>');
});

app.put('/data', (req, res) => {
  res.send('<p>Not implemented yet.</p>');
});

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
