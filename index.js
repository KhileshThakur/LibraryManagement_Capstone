require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const userRoutes = require('./routes/user');
const bookRoutes = require('./routes/book');
const borrowRoutes = require('./routes/borrow');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/users', userRoutes);
app.use('/books', bookRoutes);
app.use('/library', borrowRoutes);


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err));


app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
