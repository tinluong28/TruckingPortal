const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DeliveryOrderSchema = new Schema({
  mode: {
    type: String,
    require: true
  },
  fileCode: {
    type: String,
    require: true
  },
  fileNo: {
    type: String,
    require: true
  },
  status: {
    type: String
  },
  customer: {
    type: String,
    require: true
  },
  eta: {
    type: String,
    require: true
  },
  entryDate: {
    type: String,
    require: true
  },
  carrier: {
    type: String,
    require: true
  },
  master: {
    type: String,
    require: true
  },
  house: {
    type: String
  },
  terminal: {
    type: String,
    require: true
  },
  tentativelfd: {
    type: String
  },
  devan: {
    type: String,
    require: true
  },
  containers: [
    {
      number: {
        type: String,
        require: true
      },
      size: {
        type: String
      },
      freight: {
        type: String
      },
      customs: {
        type: String
      },
      pcsAmount: {
        type: String
      },
      pcsUnit: {
        type: String
      },
      weightAmount: {
        type: String
      },
      weightUnit: {
        type: String
      },
      dimensionAmount: {
        type: String
      },
      dimensionUnit: {
        type: String
      },
      dischargeDate: {
        type: String
      },
      lfd: {
        type: String
      },
      puDate: {
        type: String
      },
      demurrageDays: {
        type: String
      },
      puTime: {
        type: String
      },
      perDiemDate: {
        type: String
      },
      emptyReturn: {
        type: String
      },
      perDiemDays: {
        type: String
      },
      chasisNo: {
        type: String
      },
      chasisPerDiemDate: {
        type: String
      },
      chasisReturnDate: {
        type: String
      },
      chasisPerDiemDays: {
        type: String
      },
      chasisFlip: {
        type: Boolean
      },
      newChasisNo: {
        type: String
      },
      TMF: {
        type: Boolean
      },
      TMFFee: {
        type: String
      },
      nightGate: {
        type: Boolean
      },
      prePull: {
        type: Boolean
      },
      yardStorage: {
        type: Boolean
      },
      storageDays: {
        type: String
      },
      advanceExamFee: {
        type: Boolean
      },
      examFee: {
        type: String
      },
      advanceDemurrage: {
        type: Boolean
      },
      demurrageFee: {
        type: String
      },
      advancePerDiem: {
        type: Boolean
      },
      perDiemFee: {
        type: String
      },
      advanceDocsFee: {
        type: Boolean
      },
      docsFee: {
        type: String
      },
      remark: {
        type: String
      },
      delivery: []
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = DeliveryOrder = mongoose.model(
  "deliveryOrder",
  DeliveryOrderSchema
);
