const connectToMongoose = require("./db");
const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

connectToMongoose();

const port = 5000;

app.use(express.json());
  
app.use('/api/feedback', require('./routes/feedback'));
app.use('/api/hireme', require('./routes/hireme'));

app.listen(port, () => {
  console.log(`Successfully connected to chatbox at: ${port}`);
});
