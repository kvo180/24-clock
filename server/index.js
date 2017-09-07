let express = require('express');
let app = express();
let path = require('path');

app.use(express.static(path.join(__dirname,  '../client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

app.listen(1337, () => {
  console.log('Server listening on port 1337');
});