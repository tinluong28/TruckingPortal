const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const DeliverySchema = new Schema({
  company: {
    type: String,
    require: true
  },
  address: {
    type: String
  },
  city: {
    type: String
  },
  state: {
    type: String
  },
  zipcode: {
    type: String
  },
  phone: {
    type: String
  },
  remark: {
    type: String
  },
  contact: [
    {
      name: {
        type: String
      },
      position: {
        type: String
      },
      office: {
        type: String
      },
      cell: {
        type: String
      },
      email: {
        type: String
      },
      about: {
        type: String
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Delivery = mongoose.model("delivery", DeliverySchema);
