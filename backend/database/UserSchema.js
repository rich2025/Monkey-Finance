const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  assets: [{
    assetName: { type: String, required: true },
    quantity: { type: Number, required: true },
    valuePerUnit: { type: Number, required: true }
  }]
});

const User = mongoose.model('User', UserSchema);

module.exports = User;