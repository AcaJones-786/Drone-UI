const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        username: String,
        email: String,
        password: String
    },
    {
        collection: "User"
    }
);

mongoose.model("User", userSchema) ;