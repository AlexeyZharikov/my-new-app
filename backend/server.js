let express = require('express');
let cors = require('cors');
let mongoose = require('mongoose');

require('dotenv').config();

let app = express();
let port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());

let uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true  });

let connection = mongoose.connection;
connection.once('open', () => {
    console.log('Mongodb connected');
})

let exercisesRouter = require('./routes/exercises');
let usersRouter = require('./routes/users');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Port is: ${port}`);
})