import mongoose from 'mongoose';

/* PetSchema will correspond to a collection in your MongoDB database. */
const UserSchema = new mongoose.Schema({
  isSeller: {
    type: Boolean,
    required: [true, 'required'],
  },
  localPickup: {
    type: Boolean,
    required: [true, 'required'],
  },
  differentShipping: {
    type: Boolean,
    required: [true, 'required'],
  },
  billingFirstName: {
    type: String,
    required: [true, 'required'],
    maxlength: [40, 'too long'],
  },
  billingLastName: {
    type: String,
    required: [true, 'required'],
    maxlength: [40, 'too long'],
  },
  billingCompany: {
    type: String,
    maxlength: [40, 'too long'],
  },
  billingOptionalLine: {
    type: String,
    maxlength: [40, 'too long'],
  },
  billingStreetAndNumber: {
    type: String,
    required: [true, 'required'],
    maxlength: [40, 'too long'],
  },
  billingZip: {
    type: String,
    required: [true, 'required'],
    maxlength: [15, 'too long'],
  },
  billingCity: {
    type: String,
    required: [true, 'required'],
    maxlength: [40, 'too long'],
  },
  billingCountry: {
    type: String,
    required: [true, 'required'],
    maxlength: [40, 'too long'],
  },

  shippingFirstName: {
    type: String,
    maxlength: [40, 'too long'],
  },
  shippingLastName: {
    type: String,
    maxlength: [40, 'too long'],
  },
  shippingCompany: {
    type: String,
    maxlength: [40, 'too long'],
  },
  shippingOptionalLine: {
    type: String,
    maxlength: [40, 'too long'],
  },
  shippingStreetAndNumber: {
    type: String,
    maxlength: [40, 'too long'],
  },
  shippingZip: {
    type: String,
    maxlength: [15, 'too long'],
  },
  shippingCity: {
    type: String,
    maxlength: [40, 'too long'],
  },
  shippingCountry: {
    type: String,
    maxlength: [40, 'too long'],
  },
});

const model = mongoose.models.User || mongoose.model('User', UserSchema);
// const model = mongoose.models.Curry || mongoose.model('Curry', UserSchema);
export default model;
