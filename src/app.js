const express = require('express');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../public')));
app.use('/api/weather', require('./routes/weather'));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});