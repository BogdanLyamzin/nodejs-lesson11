const {Schema} = require("mongoose");

const postSchema = Schema({
    title: {
        type: String,
        required: true,
        minlength: 2
    },
    description: {
        type: String,
        required: true,
        minlength: 2
    }
});

module.exports = postSchema;