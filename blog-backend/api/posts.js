const express = require("express");

const router = express.Router();

const {postsContrl} = require("../controllers");

router.get("/", postsContrl.getAll);


module.exports = router;