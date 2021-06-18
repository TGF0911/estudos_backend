import mongoose from 'mongoose';

const Schema = new mongoose.Schema({
  firstName: {
    type: String,
    require: true
  },
  lastName: {
    type: String,
    require: true
  },
  email: String,
  active: {
    type: String,
    require: true
  }
});

export default mongoose.model('User', Schema);