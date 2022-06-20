import mongoose from 'mongoose';
/* PetSchema will correspond to a collection in your MongoDB database. */
const UserSchema = new mongoose.Schema({
  id: {
    type: String,
    required: [false, 'required'],
    maxlength: [40, 'too long'],
  },
  WSprice: {
    type: Number,
    required: [false, 'required'],
  },

});

const model = mongoose.models.User || mongoose.model('User', UserSchema);
// const model = mongoose.models.Curry || mongoose.model('Curry', UserSchema);
export default model;
