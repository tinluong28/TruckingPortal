const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const CustomerSchema = new Schema({
  company: {
    type: String,
    require: true
  },
  address: {
    type: String,
    require: true
  },
  city: {
    type: String,
    require: true
  },
  state: {
    type: String,
    require: true
  },
  zipcode: {
    type: String,
    require: true
  },
  businesstype: {
    type: String
  },
  doingbusinesssince: {
    type: String
  },
  taxid: {
    type: String
  },
  credit: {
    type: String
  },
  remark: {
    type: String
  },
  taxidtype: {
    type: String
  },
  taxid: {
    type: String
  },
  accountno: {
    type: String
  },
  credittype: {
    type: String
  },
  creditlimit: {
    type: String
  },
  paymentterm: {
    type: String
  },
  credithold: {
    type: String
  },
  note: {
    type: String
  },
  contact: [
    {
      name: {
        type: String,
        require: true
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

module.exports = Customer = mongoose.model("customer", CustomerSchema);
