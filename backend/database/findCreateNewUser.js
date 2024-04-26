const mongoose = require('mongoose');
const User = require('./userSchema'); // Assuming userSchema.js is in the same directory

mongoose.connect('mongodb://localhost:27017/MonkeyFinance', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

async function findOrCreateUser(email) {
  try {
    let user = await User.findOne({ email: email });
    if (user) {
      console.log('User found:', user);
      return user;
    } else {

      //Default User Information
      const newUser = new User({
        email: email,
        assets: []
      });

      await newUser.save();
      console.log('New user created:', newUser);
      return newUser;
    }
  } catch (error) {
    console.error('Error in findOrCreateUser:', error);
    throw error;
  }
}

// Example usage
findOrCreateUser('john.doe@example.com').then(user => {
  console.log('Operation successful:', user);
}).catch(error => {
  console.error('Operation failed:', error);
});

module.exports = findOrCreateUser;