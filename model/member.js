const mongoose = require("mongoose");

const MemberSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    nameId:{
      type:String,
      required:false
    },
    contact: {
      type: String,
      unique:true
    },
    balance: {
      type: String,
      required: true,
    },
    paid: {
      type: String,
      required: true,
      payDate:new Date(),
    },
    group: {
      type: String,
      required: false,
    },
   
   
  },
  { timestamps: true }
);

module.exports = mongoose.model("Member", MemberSchema);
