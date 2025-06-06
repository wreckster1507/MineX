// /controllers/authController.js
import User from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const login = async (req, res) => {
    const { username, password } = req.body;

    // Validate input
    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }

    try {
        // Find user by username
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Create JWT
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET || 'defaultSecret', { expiresIn: '1h' });

        // Send token response
        return res.json({ token });
    } catch (error) {
        console.error('Login error:', error.message || error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};
