const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const postsRouter = require("./api");

const app = express();

app.use(cors());

app.use("/posts", postsRouter);

const PORT = process.env.PORT || 3000;
const {DB_HOST} = process.env;

mongoose.connect(DB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(()=> app.listen(PORT));