import express from "express";
 // or "bcrypt" depending on your install
import User from "../models/user.model.js";

const router = express.Router();

router.route('/signup').post(async (req, res) => {
    const { username, password } = req.body;
    const newUser = new User({ username, password });
    try {
        await newUser.save();
        res.status(201).json('User created!');
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
});

router.route('/login').post(async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user) {
        return res.status(400).json('Invalid credentials.');
    }
    if (user.password !== password) {
        return res.status(400).json('Invalid credentials.');
    }
    res.status(200).json('Login successful!');
});


export default router;
