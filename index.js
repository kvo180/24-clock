let express = require('express');
let app = express();
let path = require('path');
let PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname,  '/client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});