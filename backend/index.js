const mongoose = require('mongoose');
const express = require('express');
const app = express();
const dotenv = require('dotenv')
const authRouter = require('./routes/authRoute.js')

//database connection 
const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("connected to the database successfully");
    } catch (error) {
        console.log(error);
    }
}
app.listen(5000, ()=> {
    console.log(`app is running at port 5000`)
    connectDB();
});

dotenv.config();
app.use(express.json());
app.use("/api/auth", authRouter)
// middleware