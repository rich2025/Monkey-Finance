const mongoose = require('mongoose');
const User = require('./UserSchema'); // Ensure this path is correct

// MongoDB URI and connection (update URI as needed)
const uri = "mongodb://localhost:27017/MonkeyFinance";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Function to find a user by email
async function findUserByEmail(email) {
    try {
        // Connect to the database
        await mongoose.connect(uri);

        // Finding the user in the database
        const user = await User.findOne({ email: email });

        // Check if user exists
        if (user) {
            console.log('User found:', user);
            return user;
        } else {
            console.log('No user found with that email');
            return null;
        }
    } catch (error) {
        console.error('Error connecting to the database:', error);
    } finally {
        // Close the database connection
        await mongoose.connection.close();
    }
}

// Example usage: Assume we get the email from OAuth callback
findUserByEmail('john.doe@examplecom').then(user => {
    if (user) {
        console.log('User data:', user);
    }
}).catch(err => {
    console.error('Error:', err);
});
