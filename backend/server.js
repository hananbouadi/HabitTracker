const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Habit Tracker API is running!");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
