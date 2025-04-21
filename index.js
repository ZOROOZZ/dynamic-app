const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 80;

// In-memory message store
let messages = [];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index', { messages });
});

app.post('/submit', (req, res) => {
  const { name, message } = req.body;
  if (name && message) {
    messages.push({ name, message, time: new Date().toLocaleString() });
  }
  res.redirect('/');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
