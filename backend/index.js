const mongoose = require('mongoose');
const express = require('express');
const app = express();
const dotenv = require('dotenv')
const authRoute = require('./routes/authRoute.js')

//database connection 
const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("connected to the database successfully");
    } catch (error) {
        console.log(error);
    }
}

dotenv.config();
app.use(express.json());
app.use("api/authentication", authRoute)


app.listen(process.env.PORT, ()=> {
    console.log(`app is running at port ${process.env.PORT}`)
    connectDB();
});

// middleware