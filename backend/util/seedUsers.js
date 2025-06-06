// /util/seedUsers.js
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import User from '../models/User.js';
import ConnectDB from './ConnectDB.js';

dotenv.config();

const seedUsers = async () => {
    try {
        // Connect to the database
        await ConnectDB();

        // Hash password
        const hashedPassword = await bcrypt.hash('Owner', 10);

        // Seed user
        const user = new User({
            username: 'Owner',
            password: hashedPassword,
        });

        // Save user to the database
        await user.save();

        console.log('User seeded successfully');
        mongoose.connection.close(); // Close the connection after seeding
    } catch (error) {
        console.error('Error seeding user:', error);
        mongoose.connection.close();
    }
};

seedUsers();
