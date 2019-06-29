const mongoose = require('mongoose');
const DB_URL = process.env.MONGODB_URI || 'mongodb://2:asdf1234@ds339177.mlab.com:39177/naijaexams'

mongoose.connect(DB_URL, { useNewUrlParser: true, useFindAndModify: false, useCreateIndex: false })
    .then(() => console.log('MongoDB connected...'))
    .catch((err) => console.log(err));

module.exports = {
    User : require('./user'),
    Post : require('./post'),
    City : require('./city'),
};
