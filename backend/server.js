const express = require('express');
const path = require('path')
const colors = require('colors');
const dotenv = require('dotenv').config();
const {errorHandler} = require('./middleware/error.middleware');
const connectDB = require('./config/db');
const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use('/api/notes', require('./routs/note.routs'))
app.use("/api/users", require("./routs/user.routs"));

// Serve frontend
if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/build')))

    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')))
}

app.use(errorHandler)
app.listen(port, () =>
 console.log(`Server started on port ${port}`.bgBrightMagenta)
);

