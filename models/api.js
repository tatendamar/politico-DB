const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PartiesSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    required: [true, 'Name field is required']
  },
  email: {
    type: String,
    required: [true, 'Email field is required']
  },
  address: {
    type: String
  },
  city: {
    type: String
  },
  logoUrl: {
    type: String
  }
});

const Party = mongoose.model('party', PartiesSchema);

module.exports = Party;
