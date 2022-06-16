import mongoose from 'mongoose';
/* PetSchema will correspond to a collection in your MongoDB database. */
const UserSchema = new mongoose.Schema({
  id: {
    type: String,
    required: [false, 'required'],
    maxlength: [40, 'too long'],
  },
  isSeller: {
    type: Boolean,
    required: [false, 'required'],
  },
  localPickup: {
    type: Boolean,
    required: [false, 'required'],
  },
  differentShipping: {
    type: Boolean,
    required: [false, 'required'],
  },
  billingFirstName: {
    type: String,
    required: [false, 'required'],
    maxlength: [40, 'too long'],
  },
  billingLastName: {
    type: String,
    required: [false, 'required'],
    maxlength: [40, 'too long'],
  },
  billingCompany: {
    type: String,
    required: [false, 'required'],
    maxlength: [40, 'too long'],
  },
  billingOptionalLine: {
    type: String,
    required: [false, 'required'],
    maxlength: [40, 'too long'],
  },
  billingStreetAndNumber: {
    type: String,
    required: [false, 'required'],
    maxlength: [40, 'too long'],
  },
  billingZip: {
    type: String,
    required: [false, 'required'],
    maxlength: [15, 'too long'],
  },
  billingCity: {
    type: String,
    required: [false, 'required'],
    maxlength: [40, 'too long'],
  },
  billingCountry: {
    type: String,
    required: [false, 'required'],
    maxlength: [40, 'too long'],
  },

  shippingFirstName: {
    type: String,
    required: [false, 'required'],
    maxlength: [40, 'too long'],
  },
  shippingLastName: {
    type: String,
    required: [false, 'required'],
    maxlength: [40, 'too long'],
  },
  shippingCompany: {
    type: String,
    required: [false, 'required'],
    maxlength: [40, 'too long'],
  },
  shippingOptionalLine: {
    type: String,
    required: [false, 'required'],
    maxlength: [40, 'too long'],
  },
  shippingStreetAndNumber: {
    type: String,
    required: [false, 'required'],
    maxlength: [40, 'too long'],
  },
  shippingZip: {
    type: String,
    required: [false, 'required'],
    maxlength: [15, 'too long'],
  },
  shippingCity: {
    type: String,
    required: [false, 'required'],
    maxlength: [40, 'too long'],
  },
  shippingCountry: {
    type: String,
    required: [false, 'required'],
    maxlength: [40, 'too long'],
  },
});

const model = mongoose.models.User || mongoose.model('User', UserSchema);
// const model = mongoose.models.Curry || mongoose.model('Curry', UserSchema);
export default model;
