const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');

const connectDB = async() => {
    await mongoose.connect(process.env.DB_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });
    console.log('Database connected');
};

module.exports = connectDB;