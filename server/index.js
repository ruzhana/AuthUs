const express = require("express");
const mongoose = require('mongoose')
const app = express();
const cors = require("cors");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const port = 8080;
const DB = "mongodb+srv://aruzhan:12345@cluster0.zsxzw0g.mongodb.net/?retryWrites=true&w=majority";

app.use(express.json());
app.use(cors());

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

const start = async () => {
    try {
        await mongoose.connect(DB);
        app.listen(port, () => {
            console.log(`Listening on port ${port}`)
        });
    } catch (error) {
        console.log('Failed to connect to the server.', error);
    }
}

start();