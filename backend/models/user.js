const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        username: String,
        email: {type: String, unique: true},
        password: String
    },
    {
        collection: "User"
    }
);

mongoose.model("User", userSchema) ;