const mongoose = require('mongoose');
const User = require('./UserSchema'); // Ensure this path is correct

// MongoDB URI and connection (update URI as needed)
const uri = "mongodb://localhost:27017/MonkeyFinance";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Function to create a new user
async function createUser(userData) {
    try {
        // Connect to the database
        await mongoose.connect(uri);

        // Creating a new user instance
        const user = new User(userData);

        // Saving the user to the database
        const savedUser = await user.save();
        console.log('User successfully added:', savedUser);
        return savedUser;

    } catch (error) {
        console.error('Error saving user to the database:', error);
        return null;
    } finally {
        // Close the database connection
        await mongoose.connection.close();
    }
}

//NEW USER
const newUser = {
    email: 'john.doe@example.com',
    name: 'John Doe',
    password: 'securepassword123',
    assets: [{}] //they aint got shit yet
};

// Adding the new user
createUser(newUser).then(user => {
    if (user) {
        console.log('New user added:', user);
    }
}).catch(err => {
    console.error('Error:', err);
});
