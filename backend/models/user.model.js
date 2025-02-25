import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "User Name is required"],
    trim: true,
    minLength: 2,
    maxLength: 50,
  },
  email: {
    type: String,
    required: [true, "Email is Required"],
    unique: true,
    trim: true,
    lowercase: true,
    match: [/\S+@\S+\.\S+/, 'Please provide a valid Email address'],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minLength: 8,
    // maxLength: 50,
  }
}, {timestamps: true});

const User = mongoose.model("User", userSchema);

export default User;
