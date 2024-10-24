const mongoose = require("mongoose");


const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const userSchema = new Schema({
    email: { type: String, unique: true },
    password: String,
    firstName: String,
    lastName: String,
});

const todoSchema = new Schema({
    title: String,
    description: String,
    userId: ObjectId,
    completed: Boolean,
});

const userModel = mongoose.model("user", userSchema);
const todoModel = mongoose.model("todo", todoSchema);

module.exports = {
    userModel,
    todoModel,
};